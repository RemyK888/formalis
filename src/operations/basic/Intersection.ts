import { IFormalisSet } from '../../core/interfaces/IFormalisSet';

/**
 * Returns the intersection of two sets.
 */
export function intersection<T>(A: IFormalisSet<T>, B: IFormalisSet<T>): IFormalisSet<T> {
  return {
    has: (x: T) => A.has(x) && B.has(x),
    strategy: A.strategy,
    strategyOptions: A.strategyOptions,
    metadata: { name: 'IntersectionSet' },
    toPredicate: () => (x: T) => A.has(x) && B.has(x),
  };
}
