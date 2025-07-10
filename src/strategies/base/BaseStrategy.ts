import { IEvaluationStrategy } from '../../core/interfaces/IEvaluationStrategy';
import { StrategyType, StrategyOptions } from '../../types/strategies';
import { IFormalisSet } from '../../core/interfaces/IFormalisSet';
import { Predicate } from '../../types';

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
