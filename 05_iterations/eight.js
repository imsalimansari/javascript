// const myNums = [1, 2, 3, 4]

// const myTotal = myNums.reduce( (acc, currval) => {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

// console.log(myTotal);


const shoppingCart = [
    {
        courseName: 'js',
        price: 2999
    },
    {
        courseName: 'py',
        price: 999
    },
    {
        courseName: 'mobile dev',
        price: 5999
    },
    {
        courseName: 'data science',
        price: 10999
    },
]

const totalAmount = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(totalAmount);
