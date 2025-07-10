import { IFormalisSet } from '@/core/interfaces/IFormalisSet';

/**
 * Returns the union of two sets.
 */
export function union<T>(A: IFormalisSet<T>, B: IFormalisSet<T>): IFormalisSet<T> {
  return {
    has: (x: T) => A.has(x) || B.has(x),
    strategy: A.strategy,
    strategyOptions: A.strategyOptions,
    metadata: { name: 'UnionSet' },
    toPredicate: () => (x: T) => A.has(x) || B.has(x),
  };
}
