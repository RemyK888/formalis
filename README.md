<div align="center">
  <h1>Formalis</h1>
</div>

> A powerful and expressive TypeScript library for working with **sets defined by logical or mathematical properties**, including **infinite sets**, with strong type safety and evaluation strategies.
---

## ✨ Features

- **Property-defined sets** using predicates or formulas
- **Finite and infinite sets** with evaluation strategies
- **Set operations**: union, intersection, difference, complement
- **Advanced constructs**: cartesian product, power set, transformations
- **Type-safe and extensible** architecture (interfaces, abstract classes)
- **Strategy pattern** for performance tuning (lazy, memoized, parallel...)
- **Mathematical extensions**: number theory, logic
- **Composability** via factories and builders

---

## 📦 Installation

```bash
npm install formalism
```

---

## 🧠 Core Concepts

Formal sets in **Formalis** are not built by listing elements, but by defining **properties** (predicates):

<img src="https://latex.codecogs.com/svg.image?A%20%3D%20%5C%7B%20x%20%5Cin%20%5Cmathbb%7BN%7D%20%7C%20x%20%5Ctext%7B is%20even%7D%20%5C%7D" alt="A = { x ∈ ℕ | x is even }" width="300" />

```ts
import { NumericSetFactory } from 'formalis';

const A = NumericSetFactory.evenNumbers();
A.has(4); // true
A.has(5); // false
```

---

## 🧩 Defining Your Own Set

<img src="https://latex.codecogs.com/svg.image?B%20%3D%20%5C%7B%20x%20%5Cin%20%5Cmathbb%7BN%7D%20%7C%20x%5E2%20%3C%20100%20%5C%7D" alt="B = { x ∈ ℕ | x² < 100 }" width="300" />

```ts
import { SetFactory } from 'formalis';

const B = SetFactory.fromPredicate({
  predicate: x => Number.isInteger(x) && x * x < 100,
  description: 'x² < 100'
});
```

Or using the `SetBuilder`:

```ts
import { SetBuilder } from 'formalis';

const C = new SetBuilder<number>()
  .withPredicate({ predicate: x => x % 10 === 1, description: 'x ≡ 1 mod 10' })
  .withMetadata({ name: 'CongruenceSet' })
  .build();
```

---

## ⚙️ Evaluation Strategies

Each set is evaluated according to a strategy:

- `'finite'`: works on explicitly listed elements
- `'lazy'`: defers evaluation
- `'memoized'`: caches results
- `'parallel'`: enables parallelism (conceptual for now)

```ts
const lazySet = SetFactory.fromPredicate(
  { predicate: x => x > 0, description: 'x > 0' },
  'lazy'
);
```

---

## 🔀 Set Operations

Let:

<img src="https://latex.codecogs.com/svg.image?A%20%3D%20%5C%7B%20x%20%7C%20P%28x%29%20%5C%7D%2C%20%5Cquad%20B%20%3D%20%5C%7B%20x%20%7C%20Q%28x%29%20%5C%7D" alt="A = { x | P(x) }, B = { x | Q(x) }" width="300" />

| Operation      | Math Notation | Code                          |
|----------------|----------------|-------------------------------|
| Union          | <img src="https://latex.codecogs.com/svg.image?A%20%5Ccup%20B" width="80"/> | `union(A, B)` |
| Intersection   | <img src="https://latex.codecogs.com/svg.image?A%20%5Ccap%20B" width="80"/> | `intersection(A, B)` |
| Difference     | <img src="https://latex.codecogs.com/svg.image?A%20%5Csetminus%20B" width="80"/> | `difference(A, B)` |
| Complement     | <img src="https://latex.codecogs.com/svg.image?U%20%5Csetminus%20A" width="75"/> | `complement(U, A)` |
| Cartesian Prod | <img src="https://latex.codecogs.com/svg.image?A%20%5Ctimes%20B" width="80"/> | `cartesianProduct(A, B)` |
| Power Set      | <img src="https://latex.codecogs.com/svg.image?%5Cmathcal%7BP%7D%28A%29" width="70"/> | `powerSet(A)` |

---

## 🔄 Transforming Sets

<img src="https://latex.codecogs.com/svg.image?f%28A%29%20%3D%20%5C%7B%20f%28x%29%20%7C%20x%20%5Cin%20A%20%5C%7D" alt="f(A) = { f(x) | x ∈ A }" width="300" />

```ts
import { transform } from 'formalis';

const squared = transform(A, x => x * x, y => y < 1000);
squared.has(36); // true if 6 ∈ A
```

---

## 🔣 Combining Sets Logically

```ts
import { combineSets } from 'formalis';

const disjunction = combineSets([A, B], (a, b) => a || b);
const xor = combineSets([A, B], (a, b) => a !== b);
```

---

## 📐 Mathematical Extensions

```ts
import { NumberTheory } from 'formalis';

const primeSet = NumberTheory.primes();
primeSet.has(7); // true
primeSet.has(9); // false
```

---

## 📊 Sampling & Enumeration

```ts
import { randomSample } from 'formalis';

const sample = randomSample(myFiniteSet, 5);
```

```ts
import { breadthFirstEnumeration } from 'formalis';

for (const el of breadthFirstEnumeration(mySet)) {
  // explore mySet
}
```

---

## 📚 API Summary

- `SetFactory.fromPredicate(...)`
- `SetBuilder`
- Set operations: `union`, `intersection`, `difference`, `complement`
- Advanced: `cartesianProduct`, `powerSet`, `transform`
- Strategies: `'finite'`, `'lazy'`, `'memoized'`, `'parallel'`
- Extensions: `NumberTheory.primes()` etc.

---

## 🧪 Testing

```bash
npm test
```

---

## 🏁 Benchmarking

A standalone benchmark script is available to evaluate the performance of Formalis operations. To run it:

```bash
node scripts/benchmark.js
```
This will execute a series of timed operations and print durations in seconds, such as:
 - Predicate evaluation on large ranges
 - Set union and intersection
 - Sampling and transformation performance

You can customize or extend the script in scripts/benchmark.js to fit your specific use cases.

---


## 📄 License

MIT — feel free to use and contribute.

---

## 🧱 Roadmap

- [ ] Stream-based lazy sets
- [ ] Real parallelism (Web Workers or threads)
- [ ] Logical inference on predicates
- [ ] Type narrowing through evaluation

---

## 💬 Support

If you have any problems or questions, feel free to contact [RemyK](https://discord.com/users/509397999924019211).

- **Discord server:** [Server Link](https://discord.gg/GK8jFXkybz)
- **GitHub repository:** [formalis](https://github.com/RemyK888/formalis)

---
<hr>
<p align="center"><b>Made with ❤ by RemyK</b></p>