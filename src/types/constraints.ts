import { Predicate } from './predicates';

/**
 * A structural or logical constraint on the elements of a set.
 */
export interface Constraint<T = unknown> {
  readonly validate: Predicate<T>;
  readonly reason?: string;
}
