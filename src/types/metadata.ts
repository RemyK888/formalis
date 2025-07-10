/**
 * Metadata associated with a Formalis set.
 */
export interface Metadata {
  readonly name?: string;
  readonly description?: string;
  readonly tags?: readonly string[];
  readonly createdAt?: Date;
  readonly updatedAt?: Date;
}
