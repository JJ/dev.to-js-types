export class Chromosome {
  #fitness;
  constructor(fitness) {
    if (fitness === null || typeof fitness === "undefined") {
      throw new Error("Fitness in Chromosome needs to be defined");
    }
    this.#fitness = fitness;
  }

  get fitness() {
    return this.#fitness;
  }
}

export class StringChromosome extends Chromosome {
  constructor(aString, fitness) {
    super(fitness);
    this.stringChr = aString;
  }
}

export class FloatChromosome extends Chromosome {
  constructor(aVector, fitness = 0) {
    super(fitness);
    this.floatVector = aVector;
  }
  static mutationRange = 0.2;
  static mutate({ floatVector }) {
    if (floatVector === undefined) {
      throw new Error("Incorrect data structure: no floatVector attribute");
    }
    const mutation_point = Math.floor(Math.random() * floatVector.length);
    let temp = [...floatVector];
    temp[mutation_point] =
      temp[mutation_point] -
      this.mutationRange / 2 +
      Math.random() * this.mutationRange;
    return temp;
  }
}
