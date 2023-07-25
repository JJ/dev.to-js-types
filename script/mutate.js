import { FloatChromosome, StringChromosome } from "../lib/chromosomes.js";

const fChrom = new FloatChromosome([0, 0, 0, 0], 0);
console.log(FloatChromosome.mutate(fChrom));

const notReallyAChrom = { floatVector: [0, 0, 0, 1] };
console.log(FloatChromosome.mutate(notReallyAChrom));

const wrongChrom = new StringChromosome("010", 3);
console.log(FloatChromosome.mutate(wrongChrom));
