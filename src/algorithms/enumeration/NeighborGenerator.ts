/**
 * Generates neighbors for supported types.
 * Can be extended for more complex data types.
 */
export function getNeighbors<T>(value: T): T[] {
  if (typeof value === 'number') {
    return [(value + 1) as T, (value - 1) as T];
  }

  if (typeof value === 'string' && value.length > 0) {
    const chars = ['a', 'b', 'c'];
    const variations = chars.map((c) => value.slice(0, -1) + c);
    return variations as T[];
  }

  if (typeof value === 'object' && value !== null) {
    const keys = Object.keys(value);
    const variations: T[] = [];
    for (const key of keys) {
      const v = structuredClone(value);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (v as any)[key] = ((v as any)[key] || 0) + 1;
      variations.push(v);
    }
    return variations;
  }

  return [];
}
