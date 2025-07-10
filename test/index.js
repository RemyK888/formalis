const { SetBuilder } = require('../dist/index.js');

const CongruenceSet = new SetBuilder()
  .withPredicate({ predicate: x => x % 10 === 1, description: 'x ≡ 1 mod 10' })
  .withMetadata({ name: 'CongruenceSet' })
  .build();