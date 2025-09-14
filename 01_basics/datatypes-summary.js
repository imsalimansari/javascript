// # Primitive Data Types

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n

// # Reference(Non-Primitive) Data Types

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "Salim",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive), Heap(Non-Primitive)

let myYoutubename = "Salimblog"
let anothername = myYoutubename



let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email= "salim@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
