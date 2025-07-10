/**
 * Identifiers for the available evaluation strategies.
 */
export type StrategyType = 'finite' | 'lazy' | 'memoized' | 'parallel';

/**
 * Common options for evaluation strategies.
 */
export interface StrategyOptions {
  readonly maxDepth?: number;
  readonly timeoutMs?: number;
  readonly parallelism?: number;
}
