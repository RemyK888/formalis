import { IFormalisSet, PredicateSet, FiniteFormalisSet, InfiniteFormalisSet } from '@/core';
import { ComplexityEstimate } from './ComplexityEstimate';

/**
 * Heuristically estimates the membership complexity of a Formalis set.
 */
export function estimateComplexity<T>(set: IFormalisSet<T>): ComplexityEstimate {
  const notes: string[] = [];
  let symbolic = 'O(?)';
  let deterministic = true;

  if (set instanceof FiniteFormalisSet) {
    symbolic = 'O(1)';
    notes.push('finite set');
  } else if (set instanceof InfiniteFormalisSet) {
    symbolic = 'O(1)';
    notes.push('infinite set, assume constant-time predicate');
  } else if (set instanceof PredicateSet) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const predicate = (set as any).predicate?.toString?.() ?? '';

    if (/Math\.random|Date\.now/.test(predicate)) {
      deterministic = false;
      notes.push('non-deterministic predicate');
    }

    if (/\.includes|indexOf/.test(predicate)) {
      notes.push('string matching');
    }

    if (/recurs|recurse/.test(predicate)) {
      notes.push('possibly recursive');
      symbolic = 'O(??)';
    }
    // eslint-disable-next-line no-useless-escape
    if (/\+|\-|\*|\/|%/.test(predicate)) {
      notes.push('arithmetic');
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const constraintCount = (set as any).constraints?.length ?? 0;
    if (constraintCount > 0) {
      notes.push(`${constraintCount} constraint${constraintCount > 1 ? 's' : ''}`);
    }

    symbolic = 'O(1)';
  }

  return new ComplexityEstimate(symbolic, notes, deterministic);
}
