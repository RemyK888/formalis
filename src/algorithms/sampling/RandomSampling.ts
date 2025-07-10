import { IFormalisSet } from '../../core/interfaces/IFormalisSet';

/**
 * Randomly samples N elements from a finite Formalis set.
 */
export function randomSample<T>(set: IFormalisSet<T> & { getElements(): readonly T[] }, n: number): T[] {
  const elements = [...set.getElements()];
  const result: T[] = [];
  while (result.length < n && elements.length) {
    const idx = Math.floor(Math.random() * elements.length);
    result.push(elements.splice(idx, 1)[0]);
  }
  return result;
}
