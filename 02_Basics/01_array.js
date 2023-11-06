const arr = [0, 1, 2, 3, 4, 5]

// console.log(arr.includes(3))  // Return true if included otherwise false
// console.log(arr.indexOf(2)) // return the index of "2"

// ++++++++++++++++++++ Array Methods  +++++++++++++++++++++++

const dc_heros = ["batman", "superman", "flash"]
const marver_heros = ["spiderman", "ironman", "thor"]

// console.log(typeof dc_heros.join()) // return as String

marver_heros.push("thanos") // insert an element from last
marver_heros.unshift("hulk") // insert an eleemnet from start

marver_heros.pop() // remove an element from last
marver_heros.shift() // remove an eleemnet from start

const num = [2, 4, 6, 8, 10]

const resultOne = num.slice(2, 4) // this portion will return to new array not affect the original array
// console.log(resultOne)   // 6, 8
// console.log(console.log("Original array after slice: ", num))

const resultTwo = num.splice(1, 3) // this portion will delete from original array
// console.log(resultTwo);
// console.log("Original array after splice: ", num)

// Concat and Spread operators

const allHeros = marver_heros.concat(dc_heros) // this will only work for two arrays
// console.log(allHeros)

const allHerosNew = [...marver_heros, ...dc_heros] // This is very useful 
//... works to spread the elements from array
// console.log(allHerosNew)

const subArray = [1, 2, 3, 4, [5, 6, 7, 1], 8, 5, 6, [12 ,18, 11], [12, 14]]
const mergeArray = subArray.flat(Infinity) //use number in place of 'Infinity' for better Practice
// console.table([mergeArray, mergeArray.length]);

//++++++++++++++++++++++ To convert an Array  ++++++++++++++++++++++++++
console.log(Array.isArray("Yuvraj")) // false
console.log(Array.from("Yuvraj")) // Convert a array from String

// To conver an array from bunch of value
const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1, score2, score3)) // convert an array from number with bunch of values