import { IFormalisSet } from '../../core/interfaces/IFormalisSet';
import { randomSample } from './RandomSampling';

/**
 * Groups elements by key and samples from each group.
 */
export function stratifiedSample<T, K>(
  set: IFormalisSet<T> & { getElements(): readonly T[] },
  keyFn: (value: T) => K,
  perGroup: number,
): Map<K, T[]> {
  const groups = new Map<K, T[]>();

  for (const element of set.getElements()) {
    const key = keyFn(element);
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)!.push(element);
  }

  const result = new Map<K, T[]>();
  for (const [key, values] of groups.entries()) {
    const sampled = randomSample(
      { getElements: () => values, has: () => true, strategy: 'finite', toPredicate: () => () => true },
      perGroup,
    );
    result.set(key, sampled);
  }

  return result;
}
