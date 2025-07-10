import { SetFactory } from '../SetFactory';
import { DescribedPredicate, Constraint, Metadata } from '../../types';
import { StrategyOptions, StrategyType } from '../../types/strategies';

/**
 * Builder for constructing complex sets step-by-step.
 */
export class SetBuilder<T = unknown> {
  private predicate!: DescribedPredicate<T>;
  private strategy: StrategyType = 'lazy';
  private options?: StrategyOptions;
  private metadata?: Metadata;
  private constraints?: Constraint<T>[];

  withPredicate(predicate: DescribedPredicate<T>): this {
    this.predicate = predicate;
    return this;
  }

  withStrategy(strategy: StrategyType): this {
    this.strategy = strategy;
    return this;
  }

  withOptions(options: StrategyOptions): this {
    this.options = options;
    return this;
  }

  withMetadata(metadata: Metadata): this {
    this.metadata = metadata;
    return this;
  }

  withConstraints(constraints: Constraint<T>[]): this {
    this.constraints = constraints;
    return this;
  }

  build() {
    return SetFactory.fromPredicate(this.predicate, this.strategy, this.options, this.metadata, this.constraints);
  }
}
