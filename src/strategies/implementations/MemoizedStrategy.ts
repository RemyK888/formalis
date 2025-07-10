import { IFormalisSet } from '@/core';
import { StrategyType, StrategyOptions, Predicate } from '@/types';
import { BaseStrategy } from '../base';

/**
 * Strategy that caches evaluation results.
 */
export class MemoizedStrategy<T = unknown> extends BaseStrategy<T> {
  readonly type: StrategyType = 'memoized';
  private cache = new Map<T, boolean>();

  constructor(options?: StrategyOptions) {
    super(options);
  }

  *evaluate(set: IFormalisSet<T>, condition: Predicate<T>): Iterable<T> {
    for (const item of this.cache.keys()) {
      if (this.cache.get(item) && condition(item)) yield item;
    }
  }

  memoize(item: T, result: boolean): void {
    this.cache.set(item, result);
  }
}
