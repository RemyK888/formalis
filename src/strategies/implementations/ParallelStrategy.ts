import { IFormalisSet } from '@/core';
import { StrategyType, StrategyOptions, Predicate } from '@/types';
import { BaseStrategy } from '../base';

/**
 * Strategy stub for parallel processing (non-threaded, placeholder).
 */
export class ParallelStrategy<T = unknown> extends BaseStrategy<T> {
  readonly type: StrategyType = 'parallel';

  constructor(options?: StrategyOptions) {
    super(options);
  }

  *evaluate(set: IFormalisSet<T>, condition: Predicate<T>): Iterable<T> {
    for (const el of set?.getElements?.() || []) {
      if (condition(el)) yield el;
    }
  }
}
