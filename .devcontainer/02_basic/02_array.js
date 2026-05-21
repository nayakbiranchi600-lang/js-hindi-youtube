const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const all_heroes = marvel_heros.concat(dc_heros) // only 2 array concat possible using this method
console.log(all_heroes);

// spred operator 
const all_newHeroes = [...marvel_heros,...dc_heros] // this method used normally because multiple array concat possible useing this method 

// flat
const  another_array = [1,2,3,[4,5,6],6,7,[8,9,10]]
const new_another_array = another_array.flat(Infinity)
console.log(new_another_array);

console.log(Array.isArray("Biranchi"));
console.log(Array.from("Biranchi"));
console.log(Array.from({name : "Biranchi"})); // return a empty array (interesting)

const score1 = 100
const score2 = 200
const score3 = 300

const totalScore = Array.of(score1,score2,score3)
console.log((totalScore));






