import { Sorter } from "./sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

// const numbersCollection = new NumbersCollection([10, 3, -5, 9]);

const charactersCollection = new CharactersCollection("aighfKAJBci ASDFovg");
const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);
