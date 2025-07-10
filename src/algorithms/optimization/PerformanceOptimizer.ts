import { IFormalisSet } from '../../core/interfaces/IFormalisSet';

/**
 * Suggests possible optimization strategies.
 */
export function suggestOptimizations<T>(_set: IFormalisSet<T>): string[] {
  return ['Use memoization if repeated lookups', 'Parallelize if evaluable', 'Restrict domain if possible']; // hahahaha
}
