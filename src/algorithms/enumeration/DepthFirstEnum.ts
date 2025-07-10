import { IFormalisSet } from '../../core/interfaces/IFormalisSet';
import { getNeighbors } from './NeighborGenerator';

/**
 * Generator function to perform depth-first enumeration on a Formalis set.
 */
export function* depthFirstEnumeration<T>(set: IFormalisSet<T>, seedValues: T[] = [], maxDepth = 10): Generator<T> {
  const seen = new Set<string>();

  function* dfs(value: T, depth: number): Generator<T> {
    const key = JSON.stringify(value);
    if (seen.has(key)) return;
    seen.add(key);

    if (set.has(value)) yield value;
    if (depth >= maxDepth) return;

    for (const neighbor of getNeighbors(value)) {
      yield* dfs(neighbor, depth + 1);
    }
  }

  for (const seed of seedValues) {
    yield* dfs(seed, 0);
  }
}
