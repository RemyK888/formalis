import { IFormalisSet } from '../../core/interfaces/IFormalisSet';

/**
 * Returns the difference A \ B.
 */
export function difference<T>(A: IFormalisSet<T>, B: IFormalisSet<T>): IFormalisSet<T> {
  return {
    has: (x: T) => A.has(x) && !B.has(x),
    strategy: A.strategy,
    strategyOptions: A.strategyOptions,
    metadata: { name: 'DifferenceSet' },
    toPredicate: () => (x: T) => A.has(x) && !B.has(x),
  };
}
