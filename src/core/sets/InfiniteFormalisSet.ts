import { PredicateSet } from './PredicateSet';
import { DescribedPredicate } from '@/types';
import { FormalisSetConstructorArgs } from './_internals';

/**
 * A Formalis set intended to be infinite (defined only by predicate).
 * This is a semantic alias of PredicateSet.
 */
export class InfiniteFormalisSet<T = unknown> extends PredicateSet<T> {
  constructor(describedPredicate: DescribedPredicate<T>, ...args: FormalisSetConstructorArgs<T>) {
    super(describedPredicate, ...args);
  }
}
