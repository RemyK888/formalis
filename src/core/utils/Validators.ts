import type { Constraint, Predicate } from '@/types';

/**
 * Validates whether a value satisfies all given constraints.
 */
export function validateWithConstraints<T>(value: T, constraints: Constraint<T>[] = []): boolean {
  return constraints.every((constraint) => constraint.validate(value));
}

/**
 * Ensures a predicate is valid (not null, not always false).
 */
export function isValidPredicate<T>(predicate: Predicate<T>): boolean {
  try {
    return typeof predicate === 'function' && predicate({} as T) !== false;
  } catch {
    return false;
  }
}
