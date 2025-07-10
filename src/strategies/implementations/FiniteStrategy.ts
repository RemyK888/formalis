import { BaseStrategy } from '../base/BaseStrategy';
import { IFormalisSet } from '../../core/interfaces/IFormalisSet';
import { Predicate } from '../../types';
import { StrategyType, StrategyOptions } from '../../types/strategies';
import { isFiniteFormalisSet } from '../../core/utils/TypeGuards';

/**
 * Strategy for evaluating finite sets.
 */
export class FiniteStrategy<T = unknown> extends BaseStrategy<T> {
  readonly type: StrategyType = 'finite';

  constructor(options?: StrategyOptions) {
    super(options);
  }

  *evaluate(set: IFormalisSet<T>, condition: Predicate<T>): Iterable<T> {
    if (!isFiniteFormalisSet(set)) return;
    for (const el of set.getElements()) {
      if (condition(el)) yield el;
    }
  }
}
