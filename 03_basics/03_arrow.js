const user = {
    username: "salim",
    price: 999,

    welcomeMsg: function (){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMsg()
// user.username = "John"
// user.welcomeMsg()

// console.log(this);

function one(){
    let username = "salim"
    console.log(this);
}

// one();

const two = () =>{
    console.log(this);   
}

// two();

// const sum = (num1, num2) => {   // Explicit Return need to write return
//     return num1 + num2
// }

// const sum = (num1, num2) => num1 + num2 //Implicit Return don't need to write return
const sum = (num1, num2) => (num1 + num2)  //Implicit Return don't need to write return

// console.log(sum(3, 4));

const abc = () => ({username: "Salim"})

console.log(abc());

