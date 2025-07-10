import { IFormalisSet } from '../../core/interfaces/IFormalisSet';
import { Predicate } from '../../types';

/**
 * Combines multiple sets into a single predicate-based set.
 */
export function combineSets<T>(
  sets: IFormalisSet<T>[],
  combiner: (...results: boolean[]) => boolean,
  name = 'CombinedSet',
): IFormalisSet<T> {
  const predicate: Predicate<T> = (element: T) => combiner(...sets.map((set) => set.has(element)));

  return {
    has: predicate,
    strategy: sets[0]?.strategy ?? 'lazy',
    strategyOptions: sets[0]?.strategyOptions,
    metadata: { name },
    toPredicate: () => predicate,
  };
}
