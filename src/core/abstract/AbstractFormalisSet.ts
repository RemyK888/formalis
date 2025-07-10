import { IFormalisSet } from '../interfaces/IFormalisSet';
import { Predicate, Constraint, Metadata } from '../../types';
import { StrategyType, StrategyOptions } from '../../types/strategies';

/**
 * Abstract base class for all Formalis sets.
 */
export abstract class AbstractFormalisSet<T = unknown> implements IFormalisSet<T> {
  readonly metadata?: Metadata;
  readonly constraints?: Constraint<T>[];
  readonly strategy: StrategyType;
  readonly strategyOptions?: StrategyOptions;

  protected constructor(
    strategy: StrategyType,
    options?: StrategyOptions,
    metadata?: Metadata,
    constraints?: Constraint<T>[],
  ) {
    this.strategy = strategy;
    this.strategyOptions = options;
    this.metadata = metadata;
    this.constraints = constraints;
  }

  /**
   * Base implementation of predicate conversion.
   */
  toPredicate(): Predicate<T> {
    return (element: T): boolean => this.has(element);
  }

  /**
   * Checks all constraints.
   */
  protected validateConstraints(element: T): boolean {
    return this.constraints?.every((constraint) => constraint.validate(element)) ?? true;
  }

  /**
   * Method to check if an element belongs to the set — must be implemented by subclasses.
   */
  abstract has(element: T): boolean;
}
