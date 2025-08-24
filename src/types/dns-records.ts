
// Union of all supported records
export type DNSRecord =
  | A
  | AAAA
  | CNAME
  | MX
  | NS
  | TXT
//   | SOA
  | SRV
  | PTR
//   | CAA
//   | ALIAS
//   | HTTPS;

// Base interface shared by all records
interface BaseRecord {
  name?: string;   // domain name (e.g. example.com)
  type: string;    // record type
  ttl?: number;    // time to live
  value: string;
}

// A record - IPv4
export interface A extends BaseRecord {
  type: "A";
}

// AAAA record - IPv6
export interface AAAA extends BaseRecord {
  type: "AAAA";
}

// CNAME record - alias
export interface CNAME extends BaseRecord {
    name: string;
    type: "CNAME";
}

// MX record - mail exchange
export interface MX extends BaseRecord {
  type: "MX";
  priority: number;  // preference value
}

// NS record - nameserver
export interface NS extends BaseRecord {
    name: string;
    type: "NS";
}

// TXT record - arbitrary text
export interface TXT extends BaseRecord {
  type: "TXT";
}

// SOA record - start of authority
// export interface SOA extends BaseRecord {
//   type: "SOA";
//   ns: string;         // primary nameserver
//   mbox: string;       // responsible party email
//   serial: number;
//   refresh: number;
//   retry: number;
//   expire: number;
//   minimum: number;
// }

// SRV record - service locator
export interface SRV extends Omit<BaseRecord, 'value'> {
    name: string;
    type: "SRV";
    priority: number;
    weight: number;
    port: number;
    target: string;
}

// CAA record - Certificate Authority Authorization
// export interface CAA extends BaseRecord {
//   type: "CAA";
// }

// PTR record - reverse lookup
export interface PTR extends BaseRecord {
    name: string;
    type: "PTR";
}

// export interface ALIAS extends BaseRecord {
//   type: "ALIAS";
// }

// export interface HTTPS  extends Omit<BaseRecord, 'value'> {
//   type: "HTTPS";
//   svcPriority: number;
//   targetName: string;
//   svcParams?: string;
// }
