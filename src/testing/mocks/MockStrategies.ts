import { IEvaluationStrategy } from '../../core/interfaces/IEvaluationStrategy';
import { IFormalisSet } from '../../core/interfaces/IFormalisSet';
import { Predicate } from '../../types';

/**
 * A simple mock strategy that yields a single true element.
 */
export class MockAlwaysTrueStrategy<T> implements IEvaluationStrategy<T> {
  readonly type = 'finite';
  evaluate(_set: IFormalisSet<T>, condition: Predicate<T>): Iterable<T> {
    const fake = {} as T;
    return condition(fake) ? [fake] : [];
  }
}
