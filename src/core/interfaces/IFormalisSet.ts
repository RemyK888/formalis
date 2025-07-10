import type { Predicate, Metadata, Constraint, StrategyType, StrategyOptions } from '@/types';
/**
 * Base interface for all Formalis sets.
 */
export interface IFormalisSet<T = unknown> {
  /** Checks if an element belongs to the set */
  has(element: T): boolean;

  /** Metadata about the set */
  readonly metadata?: Metadata;

  /** Constraints applied to the set */
  readonly constraints?: Constraint<T>[];

  /** Evaluation strategy identifier */
  readonly strategy: StrategyType;

  /** Evaluation strategy configuration */
  readonly strategyOptions?: StrategyOptions;

  getElements?(): readonly T[];

  /** Returns a predicate representation of the set */
  toPredicate(): Predicate<T>;
}
