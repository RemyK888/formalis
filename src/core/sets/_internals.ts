import type { Constraint, Metadata, StrategyOptions, StrategyType } from '@/types';

export type FormalisSetConstructorArgs<T> = [
  strategy: StrategyType,
  strategyOptions?: StrategyOptions,
  metadata?: Metadata,
  constraints?: Constraint<T>[],
];
