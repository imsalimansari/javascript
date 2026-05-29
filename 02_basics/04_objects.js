const tinderUser1 = new Object()  // singleton object

const tinderUser2 = {}

tinderUser2.id = "123"
tinderUser2.name = "john"

// console.log(tinderUser2); 

const regularUser ={
    email: "abc@gmail.com",
    fullname: {
        userfullname: {
            firstname : "Salim",
            lastname : "Ansari"
        }
    }
}


// console.log(regularUser.fullname.userfullname);


const obj1 = {
    1:"a",
    2: "b"
}

const obj2 = {
    3:"a",
    4: "b"
}

// const obj3 = {obj1, obj2}

// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}

// console.log(obj3);


const users = [
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "d@gmail.com"
    },
    
]

// console.log(users[0].email);

// console.log(tinderUser2)



const selfUser = {
    id: 1,
    name: "Sammy",
    email: "hi@gmail.com",
    isloggedIn : false
}
console.log(Object.keys(selfUser));
console.log(Object.values(selfUser));
console.log(Object.entries(selfUser));
console.log(selfUser.hasOwnProperty('name')); //true
console.log(Object.hasOwn(selfUser, "name")); // true