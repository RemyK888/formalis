import { IFormalisSet } from '../../core/interfaces/IFormalisSet';

/**
 * Returns the power set of a finite Formalis set.
 */
export function powerSet<T>(set: IFormalisSet<T> & { getElements: () => readonly T[] }): IFormalisSet<readonly T[]> {
  const elements = set.getElements();
  const subsets = 1 << elements.length;

  return {
    has: (subset: readonly T[]) => subset.every((el) => set.has(el)),
    strategy: set.strategy,
    strategyOptions: set.strategyOptions,
    metadata: { name: 'PowerSet' },
    toPredicate: () => (subset: readonly T[]) => subset.every((el) => set.has(el)),
  };
}
