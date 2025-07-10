import { IFormalisSet, isFiniteFormalisSet } from '@/core';
import { StrategyType, StrategyOptions, Predicate } from '@/types';
import { BaseStrategy } from '../base';

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
