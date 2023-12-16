const nameOne = "Virat Kohli" /*

 Primitive -: String, Symbol, Boolean, BigInt, Number, Null, Undefined

 Non- Primitive -: Array, Object and Function
*/


nameTwo = nameOne
nameTwo = "Rohit Sharma"
// console.log(nameOne)
// console.log(nameTwo)

let arrOne = [2, 4, 6, 8, 10]
let arrTwo = arrOne
arrTwo.shift()

// console.log(arrOne)
// console.log(arrTwo)


const myObj = {
    name: "Virat Kohli", 
    game: "Cricket"
}

let myObjTwo = myObj
myObjTwo.name = "Lionel Messi"
myObjTwo.game = "Football"

console.log(myObj)
console.log(myObjTwo)

