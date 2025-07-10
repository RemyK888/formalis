import { DescribedPredicate } from '../../types';
import { SetFactory } from '../../factories/SetFactory';

/**
 * Number theory predicates and sets.
 */
export const NumberTheory = {
  isPrime: (): DescribedPredicate<number> => ({
    predicate: (n) => Number.isInteger(n) && n > 1 && [...Array(n - 2)].every((_, i) => n % (i + 2) !== 0),
    description: 'n is prime',
  }),

  primes: () => SetFactory.fromPredicate(NumberTheory.isPrime()),
};
