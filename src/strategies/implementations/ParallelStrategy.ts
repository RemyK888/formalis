import { BaseStrategy } from '../base/BaseStrategy';
import { IFormalisSet } from '../../core/interfaces/IFormalisSet';
import { Predicate } from '../../types';
import { StrategyType, StrategyOptions } from '../../types/strategies';

/**
 * Strategy stub for parallel processing (non-threaded, placeholder).
 */
export class ParallelStrategy<T = unknown> extends BaseStrategy<T> {
  readonly type: StrategyType = 'parallel';

  constructor(options?: StrategyOptions) {
    super(options);
  }

  *evaluate(set: IFormalisSet<T>, condition: Predicate<T>): Iterable<T> {
    for (const el of (set as any).getElements?.() || []) {
      if (condition(el)) yield el;
    }
  }
}
