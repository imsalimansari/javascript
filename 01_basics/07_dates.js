let myDate = new Date()
// console.log(myDate.toString()); //Mon Sep 15 2025 01:48:34 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toISOString()); //2025-09-15T01:48:34.352Z
// console.log(myDate.toDateString());  // Mon Sep 15 2025
// console.log(myDate.toJSON());  // 2025-09-15T01:48:34.352Z
// console.log(myDate.toLocaleDateString()); // 9/15/2025
// console.log(myDate.toLocaleString()); // 9/15/2025, 1:48:34 AM
// console.log(myDate.toLocaleTimeString()); // 1:48:34 AM
// console.log(myDate.toTimeString());  // 01:51:53 GMT+0000 (Coordinated Universal Time)

// console.log(typeof myDate); // object

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")

// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})