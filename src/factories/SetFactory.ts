import { PredicateSet } from '../core/sets/PredicateSet';
import { DescribedPredicate } from '../types';
import { StrategyType, StrategyOptions } from '../types/strategies';
import { Metadata, Constraint } from '../types';

/**
 * Factory for creating generic PredicateSets.
 */
export class SetFactory {
  static fromPredicate<T>(
    predicate: DescribedPredicate<T>,
    strategy: StrategyType = 'lazy',
    options?: StrategyOptions,
    metadata?: Metadata,
    constraints?: Constraint<T>[],
  ) {
    return new PredicateSet(predicate, strategy, options, metadata, constraints);
  }
}
