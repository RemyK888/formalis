import { IEvaluationStrategy } from '@/core';
import { StrategyType, StrategyOptions } from '@/types';
import { FiniteStrategy, LazyStrategy, MemoizedStrategy, ParallelStrategy } from '../implementations';

/**
 * Central registry and resolver for strategy instances.
 */
export class StrategyManager {
  static resolve<T = unknown>(type: StrategyType, options?: StrategyOptions): IEvaluationStrategy<T> {
    switch (type) {
      case 'finite':
        return new FiniteStrategy<T>(options);
      case 'memoized':
        return new MemoizedStrategy<T>(options);
      case 'parallel':
        return new ParallelStrategy<T>(options);
      default:
        return new LazyStrategy<T>(options);
    }
  }
}
