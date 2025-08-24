export function findZone(qName: string, zones: string[]): string | null {
  let match: string | null = null;
  for (const zone of zones) {
    if (qName === zone || qName.endsWith("." + zone)) {
      if (!match || zone.length > match.length) {
        match = zone;
      }
    }
  }
  return match;
}