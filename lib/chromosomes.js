export class ABTException extends Error {
  constructor(className) {
    super(`${className} is an abtract base class, subclass to instantiate`);
    this.name = "ABTException";
  }
}

export class Chromosome {
  #fitness;
  constructor(fitness) {
    if (new.target === Chromosome) {
      throw new ABTException("Chromosome");
    }
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
  static mutate(chromosome) {
    const floatVector = chromosome.floatVector;
    const mutation_point = Math.floor(Math.random() * floatVector.length);
    console.log(mutation_point);
    let temp = [...floatVector];
    console.log(temp);
    temp[mutation_point] =
      temp[mutation_point] -
      this.mutationRange / 2 +
      Math.random() * this.mutationRange;
    return temp;
  }
}
