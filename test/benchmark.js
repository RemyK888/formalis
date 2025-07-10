const { performance } = require('perf_hooks');
const { SetFactory } = require('formalis');

function benchmark(label, fn) {
  const start = performance.now();
  fn();
  const end = performance.now();
  console.log(`${label}: ${(end - start) / 1000} seconds`);
}

function runBenchmarks() {
  console.log("=== Formalis Benchmarks ===\n");

  const evenSet = SetFactory.fromPredicate({
    predicate: x => x % 2 === 0,
    description: 'even numbers'
  });

  benchmark("Test membership (x = 1000000)", () => {
    evenSet.has(1_000_000);
  });

  benchmark("Test membership (x = 1000001)", () => {
    evenSet.has(1_000_001);
  });

  const setA = SetFactory.fromPredicate({
    predicate: x => x % 3 === 0,
    description: 'divisible by 3'
  });

  const setB = SetFactory.fromPredicate({
    predicate: x => x % 5 === 0,
    description: 'divisible by 5'
  });

  const unionSet = require('../dist').union(setA, setB);
  benchmark("Union membership (x = 15)", () => {
    unionSet.has(15);
  });

  benchmark("Union membership (x = 14)", () => {
    unionSet.has(14);
  });
}

runBenchmarks();