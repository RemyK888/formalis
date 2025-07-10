export class ComplexityEstimate {
  readonly symbolic: string;
  readonly notes: string[];
  readonly isDeterministic: boolean;

  constructor(symbolic: string, notes: string[] = [], isDeterministic = true) {
    this.symbolic = symbolic;
    this.notes = notes;
    this.isDeterministic = isDeterministic;
  }

  toString(): string {
    const detail = this.notes.length > 0 ? `: ${this.notes.join(', ')}` : '';
    return `${this.symbolic}${detail}`;
  }
}
