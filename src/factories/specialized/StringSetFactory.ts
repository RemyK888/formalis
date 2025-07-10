import { SetFactory } from '../SetFactory';
import { DescribedPredicate } from '../../types';

/**
 * Specialized factory for string sets.
 */
export class StringSetFactory {
  static alphabetic() {
    const predicate: DescribedPredicate<string> = {
      predicate: (s) => /^[a-zA-Z]+$/.test(s),
      description: 'Alphabetic strings',
    };
    return SetFactory.fromPredicate(predicate);
  }
}
