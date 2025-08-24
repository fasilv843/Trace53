import dgram from "dgram";
import dnsPacket from "dns-packet";
import { findZone, toAnswer } from "./utils";
import { db } from "./db";
import { RCODE } from "./types";

const server = dgram.createSocket("udp4");

server.on("message", (msg: Buffer, rinfo: dgram.RemoteInfo) => {
    const incomingReq = dnsPacket.decode(msg);

    if (!incomingReq.questions || incomingReq.questions.length === 0) return;

    console.log({ questions: incomingReq.questions, rinfo });

    const { name: fullDomain, type } = incomingReq.questions[0];

    const zone = findZone(fullDomain, Object.keys(db))

    if (zone === null) {
        const response = dnsPacket.encode({
            type: "response",
            id: incomingReq.id,
            flags: dnsPacket.AUTHORITATIVE_ANSWER | RCODE.NXDOMAIN,
            questions: incomingReq.questions,
            answers: [],
        });

        server.send(response, rinfo.port, rinfo.address);
        return;
    }

    const records = db[zone];

    if (!records) {
        const response = dnsPacket.encode({
            type: "response",
            id: incomingReq.id,
            flags: dnsPacket.AUTHORITATIVE_ANSWER | RCODE.NOTIMP,
            questions: incomingReq.questions,
            answers: [],
        });

        server.send(response, rinfo.port, rinfo.address);
        return;
    }

    const subDomain = fullDomain.slice(0, -(zone.length + 1));
  
    const matching = records.filter((rec) => {
        if (rec.type !== type) return false;
        if (subDomain === "") return !rec.name; // root zone records
        return rec.name === subDomain;
    });

    if (matching.length === 0) {
        const response = dnsPacket.encode({
            type: "response",
            id: incomingReq.id,
            flags: dnsPacket.AUTHORITATIVE_ANSWER | RCODE.NOTIMP,
            questions: incomingReq.questions,
            answers: [],
        });

        server.send(response, rinfo.port, rinfo.address);
        return;
    }

    const answers = matching.map(m => toAnswer(m, zone));

    const response = dnsPacket.encode({
        type: "response",
        id: incomingReq.id,
        flags: dnsPacket.AUTHORITATIVE_ANSWER | RCODE.NOERROR,
        questions: incomingReq.questions,
        answers,
    });

    server.send(response, rinfo.port, rinfo.address);
});

server.bind(53, () => console.log("DNS Server is running on port 53"));
