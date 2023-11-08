// map => you can return your value
// forEach => you can't return anything


const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// const newNum = myNum.map( (num) => num + 10)

// console.log(newNum)

// Chaining

// Example 1 of Chaining

const resOne = myNum
.map( (num) => {
    return num * 10
    })
.map( (num) => {
    return num + 1
    })

// console.log(resOne)

// Example 2 of Chaining

const thinkNum = [12, 23, 57, 14, 26, 33]
const resTwo = thinkNum
.map( (num) => num * 2)
.map( (num) => num + 20)
.map( (num) => num / 2)
.filter( (num) => num >= 40) 

// console.log(resTwo) 


