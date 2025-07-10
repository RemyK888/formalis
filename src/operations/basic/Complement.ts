import { IFormalisSet } from '@/core/interfaces/IFormalisSet';

/**
 * Returns the complement of a set with respect to the universal set.
 */
export function complement<T>(U: IFormalisSet<T>, A: IFormalisSet<T>): IFormalisSet<T> {
  return {
    has: (x: T) => U.has(x) && !A.has(x),
    strategy: A.strategy,
    strategyOptions: A.strategyOptions,
    metadata: { name: 'ComplementSet' },
    toPredicate: () => (x: T) => U.has(x) && !A.has(x),
  };
}
