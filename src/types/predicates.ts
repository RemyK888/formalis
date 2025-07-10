/**
 * A predicate is a function that takes an element of type T and returns a boolean.
 */
export type Predicate<T = unknown> = (element: T) => boolean;

/**
 * A typed predicate with an optional description for traceability or debugging.
 */
export interface DescribedPredicate<T = unknown> {
  predicate: Predicate<T>;
  description?: string;
}
