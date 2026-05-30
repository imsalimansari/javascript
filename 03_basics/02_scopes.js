var c =300
let a = 500
if (true) {
    let a=10
    const b=20
    var c=30
    // console.log(a);
    // console.log(c);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "salim"
    function two(){
        const age=20
        // console.log(username);        
    }
    // console.log(age);
    two()
}

one()

if (true){
    const username = "salim"
    if(username === "salim"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// console.log(addOne(5));
function addOne(num) {
    return num + 1
}

addOne(5)


// console.log(addTwo(5));
const addTwo = function (num) {
    return num + 2
}

addTwo(5)

