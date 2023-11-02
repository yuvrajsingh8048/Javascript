let score = "33abc"
let changeNumber = Number(score)

/*
"33" => 33
"33abc" => NaN (Not a Number)
true => 1 and false => 0
*/

// console.table([typeof changeNumber, changeNumber])

let isLoggedIn = "Yuvraj"
let changeBoolean = Boolean(isLoggedIn)
/*
1 => true and 0 => false
"" => false and "abc" => true
*/

// console.table([typeof changeBoolean ,changeBoolean])

let someNumber = 33
let changeString = String(someNumber)
/*
change any number boolean into inverted coma so 
it will become string
*/

console.table([typeof changeString, changeString])