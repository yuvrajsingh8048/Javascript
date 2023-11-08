// reduce
const myNum = [1, 2, 3, 4, 5]

const result = myNum.reduce( (accumulator, currentValue) => {
// console.log(`Accumulator : ${accumulator} and Current Value : ${currentValue}`)
    return accumulator + currentValue
    }, 0)  // initial value of accumulator

// console.log(result)

// Short-cut of above Method

const resultTwo = myNum.reduce( (acc, curr) => (acc + curr), 0)

// console.log(resultTwo)

// This method is mostly used in shoping

// Let's Practice

const shoppingCart = [
    {
        course: "JavaScript Course",
        price: 2999
    },
    {
        course: "Data Science Course",
        price: 4999
    },
    {
        course: "Machine Learning Course",
        price: 3999
    },
    {
        course: "Python Course",
        price: 999
    },
    {
        course: "DSA Course",
        price: 1999
    },
    {
        course: "Java Course",
        price: 1499
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => {
    return acc + item.price
}, 0)

console.log(priceToPay)
