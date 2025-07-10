import type { StrategyType, StrategyOptions, Predicate } from '@/types';
import { IFormalisSet } from './IFormalisSet';

/**
 * Interface for defining evaluation strategies.
 */
export interface IEvaluationStrategy<T = unknown> {
  /** Unique identifier for the strategy */
  readonly type: StrategyType;

  /** Strategy configuration */
  readonly options?: StrategyOptions;

  /** Evaluate a condition over a set */
  evaluate(set: IFormalisSet<T>, condition: Predicate<T>): Iterable<T>;
}
