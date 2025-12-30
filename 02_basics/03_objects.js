
const mysym = Symbol("key1"); 



const JsUser ={
    "first name" : "Salim",
    "lastname" : "Ansari",
    [mysym] : "Mykey1",
    age: 18,
    location: "Noida",
    email: "salim@gmail.com",
    isLoggedIn: false,
    lastLoggedInDays: ["Mon", "Tue", "Wed", "Sat"]

}




console.log(JsUser.email)
console.log(JsUser ["email"])
console.log(JsUser["first name"]) //Can't access by Dot notation
console.log(JsUser.lastname)
console.log(JsUser [mysym])  // Bracket notation is required for Symbols
console.log(typeof mysym);

JsUser.email = "salim@google.com"

// console.log(JsUser)

// Object.freeze(JsUser)  // its freeze all the object value

JsUser.email = "salim@youtube.com"

// console.log(JsUser)


JsUser.greeting = function(){
    console.log("Hello JS user");
    
}

JsUser.greetingtwo = function(){
    console.log(`Hello JS user, ${this["first name"]}`);
    
}

console.log(JsUser.greeting); // it's return [Function (anonymous)]
console.log(JsUser.greeting()); // it's return Hello JS user
console.log(JsUser.greetingtwo()); 


