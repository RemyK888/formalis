import { IEvaluationStrategy, IFormalisSet } from '@/core';
import { StrategyType, StrategyOptions, Predicate } from '@/types';

/**
 * Abstract base class for evaluation strategies.
 */
export abstract class BaseStrategy<T = unknown> implements IEvaluationStrategy<T> {
  abstract readonly type: StrategyType;
  readonly options?: StrategyOptions;

  protected constructor(options?: StrategyOptions) {
    this.options = options;
  }

  abstract evaluate(set: IFormalisSet<T>, condition: Predicate<T>): Iterable<T>;
}
