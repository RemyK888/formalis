import { IFormalisSet } from '../../core/interfaces/IFormalisSet';

/**
 * A mock set always returning true for `.has`.
 */
export const AlwaysTrueSet: IFormalisSet<unknown> = {
  has: () => true,
  strategy: 'finite',
  toPredicate: () => () => true,
  metadata: { name: 'AlwaysTrueSet' },
};
