import { FloatChromosome } from "../lib/chromosomes.js";

const fChrom = new FloatChromosome([0, 0, 0, 0], 0);
console.log(FloatChromosome.mutate(fChrom));
