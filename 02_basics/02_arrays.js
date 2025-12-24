const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman","flash" ,"batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// [
//   "thor",        // index 0
//   "ironman",     // index 1
//   "spiderman",   // index 2
//   ["superman", "flash", "batman"] // index 3
// ]

// const allArry = marvel_heros.concat(dc_heros)
// console.log(allArry);

// const allArry = [...marvel_heros, ...dc_heros]
// console.log(allArry);

const anotherArry = [1, 2, ,3, [4, 5, 6], 7, [6 ,7, [4, 5]]]

const real_another_arry = anotherArry.flat(Infinity)

console.log(real_another_arry)

console.log(Array.isArray("Salim"));
console.log(Array.from("Salim"));
console.log(Array.from({name : "Salim"}));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));
