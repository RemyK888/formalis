import { LiteralEnum } from './literal-enum';

/**
 * Identifiers for the available evaluation strategies.
 */
export const StrategyType = {
  Finite: 'finite',
  Lazy: 'lazy',
  Memoized: 'memoized',
  Parallel: 'parallel',
};

export type StrategyType = LiteralEnum<typeof StrategyType>;

/**
 * Common options for evaluation strategies.
 */
export interface StrategyOptions {
  readonly maxDepth?: number;
  readonly timeoutMs?: number;
  readonly parallelism?: number;
}
