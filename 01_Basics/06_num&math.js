const num = Math.random() // range 0 to 1

const newNum = Math.floor(Math.random()*10000) // You will max 4 digit number
// console.log(num)
// console.log(newNum)

// If u want to generate random number in range
const min = 1000
const max = 9999

const anotherNum = Math.floor(Math.random()*(max-min + 1) + min) // Learn this formula this is very important
console.log(anotherNum)