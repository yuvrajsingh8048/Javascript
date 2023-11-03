/*
Datatypes are of two types:
1. Primitive
2. Non Primitive (Reference)

Primitive : 7 types
String, Symbol, Number, Null, BigInt, Boolean and Undefined

Non-Primitive: 3 types
Array, Object and Function
*/

const sym1 = Symbol('1, 2, 3, 4')
const sym2 = Symbol('1, 2, 3, 4')

console.log(sym1 === sym2);  // False

const bigNumber = 466565676535n // Large digit end with small n called as bigInt datatype