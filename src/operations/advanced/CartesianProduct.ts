import { IFormalisSet } from '@/core/interfaces/IFormalisSet';

/**
 * Returns the Cartesian product of two sets.
 */
export function cartesianProduct<A, B>(setA: IFormalisSet<A>, setB: IFormalisSet<B>): IFormalisSet<[A, B]> {
  return {
    has: ([a, b]: [A, B]) => setA.has(a) && setB.has(b),
    strategy: setA.strategy,
    strategyOptions: setA.strategyOptions,
    metadata: { name: 'CartesianProduct' },
    toPredicate:
      () =>
      ([a, b]) =>
        setA.has(a) && setB.has(b),
  };
}
