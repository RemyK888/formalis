import { IFormalisSet } from '@/core';
import { StrategyType, StrategyOptions, Predicate } from '@/types';
import { BaseStrategy } from '../base';

/**
 * Lazily evaluates the predicate without constraint on enumeration.
 */
export class LazyStrategy<T = unknown> extends BaseStrategy<T> {
  readonly type: StrategyType = 'lazy';

  constructor(options?: StrategyOptions) {
    super(options);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  *evaluate(_set: IFormalisSet<T>, _condition: Predicate<T>): Iterable<T> {
    yield;
  }
}
