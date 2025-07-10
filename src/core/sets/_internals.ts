import { Constraint, Metadata } from '../../types';
import { StrategyOptions, StrategyType } from '../../types/strategies';

export type FormalisSetConstructorArgs<T> = [
  strategy: StrategyType,
  strategyOptions?: StrategyOptions,
  metadata?: Metadata,
  constraints?: Constraint<T>[],
];
