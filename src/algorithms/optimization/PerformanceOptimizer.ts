import { IFormalisSet, PredicateSet, FiniteFormalisSet, InfiniteFormalisSet } from '@/core';

export interface OptimizationSuggestion {
  message: string;
  impact: 'low' | 'medium' | 'high';
  reason?: string;
}

export interface OptimizationReport {
  summary: string;
  suggestions: OptimizationSuggestion[];
}

export function suggestOptimizations<T>(set: IFormalisSet<T>): OptimizationReport {
  const suggestions: OptimizationSuggestion[] = [];

  if (set instanceof FiniteFormalisSet) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const size = (set as any).elements?.length;
    if (typeof size === 'number') {
      if (size > 1000) {
        suggestions.push({
          message: 'Use indexing or hash-based access for large finite sets.',
          impact: 'high',
          reason: 'Element lookup becomes linear for large arrays.',
        });
      } else {
        suggestions.push({
          message: 'Cache elements using Set<T> for faster membership checks.',
          impact: 'medium',
        });
      }
    }
  }

  if (set instanceof InfiniteFormalisSet) {
    suggestions.push({
      message: 'Use lazy evaluation or bounded sampling.',
      impact: 'high',
      reason: 'Infinite sets cannot be eagerly enumerated.',
    });
  }

  if (set instanceof PredicateSet) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const predicate = (set as any).predicate;
    if (predicate) {
      const code = predicate.toString();

      if (/Math\.random|Date\.now/.test(code)) {
        suggestions.push({
          message: 'Avoid non-deterministic predicates.',
          impact: 'high',
          reason: 'Inconsistent behavior during evaluation or caching.',
        });
      }

      if (/instanceof|typeof/.test(code)) {
        suggestions.push({
          message: 'Move type checks outside the predicate if possible.',
          impact: 'low',
        });
      }
      // eslint-disable-next-line no-useless-escape
      if (/[\+\-\*\/\%<>=!]{1,2}/.test(code)) {
        suggestions.push({
          message: 'Memoize complex predicate results.',
          impact: 'medium',
        });
      }

      if (/\.includes\(|\[\]|indexOf|match|test/.test(code)) {
        suggestions.push({
          message: 'Cache results for string-heavy predicates.',
          impact: 'medium',
        });
      }
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const strategy = (set as any).strategy;
  if (strategy) {
    switch (strategy) {
      case 'memoized':
        suggestions.push({ message: 'Memoized: great for repeated queries.', impact: 'high' });
        break;
      case 'lazy':
        suggestions.push({
          message: 'Lazy strategy: combine with bounded sampling.',
          impact: 'medium',
        });
        break;
      case 'parallel':
        suggestions.push({
          message: 'Parallel strategy: ensure predicate is thread-safe.',
          impact: 'high',
        });
        break;
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if ('constraints' in set && Array.isArray((set as any).constraints)) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const constraints = (set as any).constraints;
    if (constraints.length > 0) {
      suggestions.push({
        message: 'Review constraints for redundancy or overlap.',
        impact: 'medium',
      });
    }
  }

  if (suggestions.length === 0) {
    suggestions.push({
      message: 'No optimization needed for current configuration.',
      impact: 'low',
    });
  }

  const summary = `Found ${suggestions.length} optimization${suggestions.length > 1 ? 's' : ''}.`;
  return { summary, suggestions };
}
