import { AbstractFormalisSet } from '../abstract/AbstractFormalisSet';
import { DescribedPredicate } from '../../types';
import { FormalisSetConstructorArgs } from './_internals';

/**
 * A Formalis set defined by a predicate function.
 */
export class PredicateSet<T = unknown> extends AbstractFormalisSet<T> {
  private readonly describedPredicate: DescribedPredicate<T>;

  constructor(
    describedPredicate: DescribedPredicate<T>,
    ...[strategy, strategyOptions, metadata, constraints]: FormalisSetConstructorArgs<T>
  ) {
    super(strategy, strategyOptions, metadata, constraints);
    this.describedPredicate = describedPredicate;
  }

  has(element: T): boolean {
    return this.validateConstraints(element) && this.describedPredicate.predicate(element);
  }

  sample(n: number, from = 0): T[] {
    const results: T[] = [];
    let current = from;
    while (results.length < n) {
      if (this.has(current as any)) results.push(current as any);
      current++;
      if (current > 1_000_000) break;
    }
    return results;
  }
}
