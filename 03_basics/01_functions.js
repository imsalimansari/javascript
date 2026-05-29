function sayName() {
    console.log("S");
    console.log("A");
    console.log("L");
    console.log("I");
    console.log("M");
}

// sayName();

// function add(num1, num2) {
//     console.log(num1 + num2);
// }

// add(4, 7)
// add(3, "a")
// add(3, null)

function add(num1, num2) {
    // let result = num1 + num2;
    // return result   method 1

    return num1 + num2 // method 2
    console.log("Salim");  // code not reachable in function after we use return
}

const result = add (5,6)
// console.log("result:", result);

// function loggedInMsg (username) {
//     return `${username} just loggedIn`
// }

// console.log(loggedInMsg('salim'));
// console.log(loggedInMsg());

function loggedInMsg (username = "User") {   // if user passed parameter then User updated else print User
    if(!username){  // !username is equal to username === undefined
        console.log("Please Enter Your Username");
        return
    }
    return `${username} just loggedIn`
}

// console.log(loggedInMsg());
console.log(loggedInMsg('salim'));