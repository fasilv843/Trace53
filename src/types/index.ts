export * from './dns-records'

/**
 * DNS Response Codes (RCODE)
 * Defined in RFC 1035, Section 4.1.1.
 * This 4-bit field is set as part of DNS responses to indicate the status of the query.
 * 
 * Values 6 to 15 reserved for future use
 */
export enum RCODE {
  /** 
   * No error condition 
   * The query completed successfully.
   */
  NOERROR = 0,

  /** 
   * Format error 
   * The name server was unable to interpret the query.
   */
  FORMERR = 1,

  /** 
   * Server failure 
   * The name server was unable to process this query due to a problem with the server itself.
   */
  SERVFAIL = 2,

  /** 
   * Non-existent domain (Name Error)  
   * Meaningful only for responses from an authoritative name server.  
   * This code signifies that the domain name referenced in the query does not exist. 
   */
  NXDOMAIN = 3,

  /** 
   * Not implemented  
   * The name server does not support the requested kind of query.
   */
  NOTIMP = 4,

  /** 
   * Refused  
   * The name server refuses to perform the specified operation for policy reasons.  
   * For example, the server may not provide information to a particular requester,  
   * or may deny a zone transfer.
   */
  REFUSED = 5,
}
