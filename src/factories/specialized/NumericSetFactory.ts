import { SetFactory } from '../SetFactory';
import { DescribedPredicate } from '../../types';

/**
 * Specialized factory for numeric sets.
 */
export class NumericSetFactory {
  static positiveIntegers() {
    const predicate: DescribedPredicate<number> = {
      predicate: (x) => Number.isInteger(x) && x > 0,
      description: 'x ∈ ℕ*',
    };
    return SetFactory.fromPredicate(predicate);
  }

  static evenNumbers() {
    const predicate: DescribedPredicate<number> = {
      predicate: (x) => x % 2 === 0,
      description: 'x is even',
    };
    return SetFactory.fromPredicate(predicate);
  }
}
