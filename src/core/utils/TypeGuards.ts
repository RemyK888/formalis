import { IFormalisSet } from '../interfaces/IFormalisSet';
import { PredicateSet } from '../sets/PredicateSet';
import { FiniteFormalisSet } from '../sets/FiniteFormalisSet';
import { InfiniteFormalisSet } from '../sets/InfiniteFormalisSet';

/**
 * Checks if a set is a PredicateSet.
 */
export function isPredicateSet<T = unknown>(set: IFormalisSet<T>): set is PredicateSet<T> {
  return set instanceof PredicateSet;
}

/**
 * Checks if a set is a FiniteFormalisSet.
 */
export function isFiniteFormalisSet<T = unknown>(set: IFormalisSet<T>): set is FiniteFormalisSet<T> {
  return set instanceof FiniteFormalisSet;
}

/**
 * Checks if a set is an InfiniteFormalisSet.
 */
export function isInfiniteFormalisSet<T = unknown>(set: IFormalisSet<T>): set is InfiniteFormalisSet<T> {
  return set instanceof InfiniteFormalisSet;
}
