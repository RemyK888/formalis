import { SetFactory } from '../SetFactory';
import { DescribedPredicate } from '../../types';

/**
 * Specialized factory for object-based sets.
 */
export class ObjectSetFactory {
  static hasKey(key: string) {
    const predicate: DescribedPredicate<Record<string, unknown>> = {
      predicate: (obj) => key in obj,
      description: `Object has key '${key}'`,
    };
    return SetFactory.fromPredicate(predicate);
  }
}
