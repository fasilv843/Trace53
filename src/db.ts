import { DNSRecord } from "./types";

export const db: Record<string, DNSRecord[]> = {
  "johndoe.dev": [
    { type: "A", value: "5.6.7.8" },
    { type: "A", value: "5.6.7.9" },
    { type: "AAAA", value: "2400:cb00:2048:1::c629:d7a2" },
    { type: "MX", value: "mx1.zohomail.in", priority: 1 },
    { type: "MX", value: "mx2.zohomail.in", priority: 5 },
    { type: "TXT", value: "v=spf1 include:_spf.google.com ~all" },
    { type: "TXT", value: "google-site-verification=abcd1234" },
    { name: "www", type: "CNAME", value: "johndoe.dev" },
    { name: "blog", type: "CNAME", value: "johndoe.medium.com" },
    { name: "dev", type: "NS", value: "ns1.dev-dns.net" },
    { name: "dev", type: "NS", value: "ns2.dev-dns.net" },
  ],

  "my-dns.janedoe.in": [
    { type: "A", value: "192.0.2.100" },
    { type: "A", value: "192.0.2.101" },
    { type: "AAAA", value: "2001:db8:1234::1" },
    { type: "TXT", value: "some verification token" },
    { type: "TXT", value: "v=DMARC1; p=reject; rua=mailto:dmarc@janedoe.in" },
    { type: "MX", value: "mx1.google-mail.com", priority: 10 },
    { type: "MX", value: "mx2.google-mail.com", priority: 20 },
    { name: "mail", type: "A", value: "192.0.2.150" },
    { name: "mail", type: "AAAA", value: "2001:db8:1234::2" },
    { name: "_sip._tcp", type: "SRV", priority: 10, weight: 5, port: 5060, target: "sip.my-dns.janedoe.in" },
    { name: "_sip._udp", type: "SRV", priority: 20, weight: 10, port: 5060, target: "sip.my-dns.janedoe.in" },
  ],

  "hello.com": [
    { type: "A", value: "203.0.113.50" },
    { type: "A", value: "203.0.113.51" },
    { type: "AAAA", value: "2001:db8:abcd::1" },
    { type: "MX", value: "mx1.hello.com", priority: 5 },
    { type: "MX", value: "mx2.hello.com", priority: 15 },
    { type: "TXT", value: "apple-domain-verification=xyz987" },
    { type: "TXT", value: "v=spf1 ip4:203.0.113.0/24 -all" },
    { name: "api", type: "CNAME", value: "lb.hello.com" },
    { name: "cdn", type: "CNAME", value: "cdn.provider.net" },
    { name: "blog", type: "NS", value: "ns1.blogdns.net" },
    { name: "blog", type: "NS", value: "ns2.blogdns.net" },
    { name: "51.113.0.203.in-addr.arpa", type: "PTR", value: "hello.com" },
  ],
};
