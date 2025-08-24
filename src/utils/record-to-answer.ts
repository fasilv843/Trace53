import { Answer } from "dns-packet";
import { DNSRecord } from "../types";

const DEFAULT_TTL = 60;

function getName(domain: string, recordName?: string): string {
    let name = ''

    if (recordName) {
        name += recordName + '.'
    }

    return name + domain;
}

export function toAnswer(record: DNSRecord, domain: string): Answer {
  switch (record.type) {
    case "A":
    case "AAAA":
    case "CNAME":
    case "NS":
    case "PTR":
    // case "CAA":
    // case "ALIAS":
      return {
        type: record.type,
        class: "IN",
        name: getName(domain, record.name),
        ttl: record.ttl ?? DEFAULT_TTL,
        data: record.value,
      };

    case "TXT":
      return {
        type: "TXT",
        class: "IN",
        name: getName(domain, record.name),
        ttl: record.ttl ?? DEFAULT_TTL,
        // dns-packet expects an array of strings for TXT
        data: [record.value],
      };

    case "MX":
      return {
        type: "MX",
        class: "IN",
        name: getName(domain, record.name),
        ttl: record.ttl ?? DEFAULT_TTL,
        data: {
          preference: record.priority,
          exchange: record.value,
        },
      };

    case "SRV":
      return {
        type: "SRV",
        class: "IN",
        name: getName(domain, record.name),
        ttl: record.ttl ?? DEFAULT_TTL,
        data: {
          priority: record.priority,
          weight: record.weight,
          port: record.port,
          target: record.target,
        },
      };

    // case "HTTPS":
    //   return {
    //     type: "HTTPS",
    //     class: "IN",
    //     name: record.name ?? "",
    //     ttl: record.ttl,
    //     data: {
    //       priority: record.svcPriority,
    //       target: record.targetName,
    //       // dns-packet allows Buffer/string/Record<string,string> for svcParams
    //       params: record.svcParams ?? "",
    //     },
    //   };

    default:
      throw new Error(`Unsupported record type: ${(record as any).type}`);
  }
}


