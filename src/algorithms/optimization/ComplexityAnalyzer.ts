import { IFormalisSet } from '../../core/interfaces/IFormalisSet';

/**
 * Analyzes complexity heuristically.
 */
export function estimateComplexity<T>(set: IFormalisSet<T>): string {
  if ('getElements' in set) {
    return 'O(n) — finite';
  }
  return 'O(?) — abstract';
}
