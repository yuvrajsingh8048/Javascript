/*
Datatypes are of two types:
1. Primitive : it just give you copy so if you make any changes it will does'n affect the original value  or Call by Value

2. Non Primitive (Reference) : if you make any chnages the original value will also be changed  or Call by reference

Primitive : 7 types
String, Symbol, Number, Null, BigInt, Boolean and Undefined

Non-Primitive: 3 types
Array, Object and Function
*/

const sym1 = Symbol('1, 2, 3, 4')
const sym2 = Symbol('1, 2, 3, 4')

console.log(sym1 === sym2);  // False

const bigNumber = 466565676535n // Large digit number end with small n is called as bigInt datatype



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++/

/*
Stack (Primitive) and Heap (Non-Primitive)
*/

//Stack (Primitive)
let name1 = "Matt Henry"
name2 = name1
let name2 = "Jimmy Anderson"

// console.log(name1)
// console.log(name2)

// Heap (Non-Primitive)
let obj1 = {
    name: "Physics Wallah",
    rating: 9
}

let obj2 = obj1

obj2.name = "Unacademy"

// console.log(obj1.name)  Name will also change becoz of call by refernece
// console.log(obj2.name)
