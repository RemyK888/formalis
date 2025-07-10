import { AbstractFormalisSet } from '@/core/abstract';
import { FormalisSetConstructorArgs } from './_internals';

/**
 * A Formalis set with a finite list of elements.
 */
export class FiniteFormalisSet<T = unknown> extends AbstractFormalisSet<T> {
  private readonly elements: readonly T[];

  constructor(
    elements: readonly T[],
    ...[strategy, strategyOptions, metadata, constraints]: FormalisSetConstructorArgs<T>
  ) {
    super(strategy, strategyOptions, metadata, constraints);
    this.elements = elements;
  }

  has(element: T): boolean {
    return this.validateConstraints(element) && this.elements.includes(element);
  }

  getElements(): readonly T[] {
    return this.elements;
  }
}
