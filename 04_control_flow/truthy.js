userEmail = []

// if(userEmail){
//     console.log('User Email Found.');
// } else {
//     console.log('User Email Not Found.');
// }

//Falsy Value
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//Truthy Value
// "0", 'false', "", [], {}, function () {}, 

// if(userEmail.length === 0){
//     console.log('Array is Empty.');
// }

// const emptyObject = {}

// if(Object.keys(emptyObject).length === 0){
//     console.log('Object is Empty.');
// }

// Nullish coalescing operator (??): null undefined

let val1;
// val1 = 5 ?? 10;
val1 = null ?? 10;
// console.log(val1);

// const val2 = 15 ?? 20;
const val2 = undefined ?? 20;
// console.log(val2);


//Terniary Operator

// condition ? true : false
const salary = 10000

salary <= 5000 ? console.log("Salary is less than 5000.") : console.log("Salary is greater than 5000.")
