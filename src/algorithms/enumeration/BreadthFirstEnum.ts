import { IFormalisSet } from '../../core/interfaces/IFormalisSet';
import { getNeighbors } from './NeighborGenerator';

/**
 * Generator function to perform breadth-first enumeration on a Formalis set.
 */
export function* breadthFirstEnumeration<T>(set: IFormalisSet<T>, seedValues: T[] = [], maxDepth = 10): Generator<T> {
  const seen = new Set<string>();
  const queue: { value: T; depth: number }[] = seedValues.map((v) => ({ value: v, depth: 0 }));

  while (queue.length > 0) {
    const { value, depth } = queue.shift()!;
    const key = JSON.stringify(value);
    if (seen.has(key)) continue;
    seen.add(key);

    if (set.has(value)) yield value;
    if (depth >= maxDepth) continue;

    for (const neighbor of getNeighbors(value)) {
      queue.push({ value: neighbor, depth: depth + 1 });
    }
  }
}
