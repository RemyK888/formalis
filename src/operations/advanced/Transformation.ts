import { IFormalisSet } from '../../core/interfaces/IFormalisSet';
import { Predicate } from '../../types';

/**
 * Applies a transformation function to a set, producing a new derived set.
 */
export function transform<T, R>(
  source: IFormalisSet<T>,
  mapFn: (value: T) => R,
  predicate: Predicate<R>,
): IFormalisSet<R> {
  return {
    has: (x: R) => predicate(x),
    strategy: source.strategy,
    strategyOptions: source.strategyOptions,
    metadata: { name: 'TransformedSet' },
    toPredicate: () => predicate,
  };
}
