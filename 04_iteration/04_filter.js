// For Each value doesn't return anything

const codingTwo = ["JS", "CPP", "My SQL", "MongoDB", "HTML", "CSS"]

const val = codingTwo.forEach( (item) => {
    return item // it will return nothing
});
// console.log(val)

// To return we use 'Filter' method

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const valTwo = num.filter((value) => {
    return (value %2 == 0) // only Even Number
})
console.log(valTwo)