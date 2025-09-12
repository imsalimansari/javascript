const accountId = 141414
let accountEmail = "salim@gmail.com"
var accountPass = "12345"

accountCity = "Siwan"

// accountId = 2 Not allowed

accountEmail = "hr@gmail.com"
accountPass = "56789"
accountCity = "Patna"
let accountState;
console.log(accountId)

/*
prefer not to use var
because of issue in block scope or functional scope
*/
console.table([accountId, accountEmail, accountPass, accountCity, accountState])
