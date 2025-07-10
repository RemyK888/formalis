import { BaseStrategy } from '../base/BaseStrategy';
import { IFormalisSet } from '../../core/interfaces/IFormalisSet';
import { Predicate } from '../../types';
import { StrategyType, StrategyOptions } from '../../types/strategies';

/**
 * Lazily evaluates the predicate without constraint on enumeration.
 */
export class LazyStrategy<T = unknown> extends BaseStrategy<T> {
  readonly type: StrategyType = 'lazy';

  constructor(options?: StrategyOptions) {
    super(options);
  }

  *evaluate(_set: IFormalisSet<T>, _condition: Predicate<T>): Iterable<T> {
    return;
  }
}
