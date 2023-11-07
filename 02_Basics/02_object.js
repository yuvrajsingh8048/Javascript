/*
Singleton  =>  Objecte.create

Object Literals
*/


const mySym1 = Symbol("myKey")
const mySym2 = Symbol("yourKey")

const obj = {
    id: 255444, // here key automaticall indicating as a string
    "full name": "Yuvraj Singh",  // key is a sting datatype
    [mySym1]: "myKey!!!!", // [] indicates that it is a Symbol
    mySym2: "yourKey!!!" // indicates as a string only    
}
// console.log(obj.id)  // old fashion
// console.log(obj["full name"]) // this key value pair can't be used in old fashion way
// console.log(obj["id"]) // updated version 

obj["age"] = 20

obj.greeting = function(){
    // console.log(`Hello Web Devloper ${this["full name"]}`)
}

// console.log(obj.greeting()) //only old fashion way...........

// console.log(obj)

// ************ Part 2 ****************************

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

// To merge all object in a single object

// const objMain = Object.assign({}, obj1, obj2, obj3) // Syntax: Object.Assign(target, source) but but it is outdated, so for use use 'spread' operator
 
const objMain = {...obj1, ...obj2, ...obj3} // Spread operator
// console.table(objMain)

// All the 3 return in an array so you can use loop throughout the element
/*
console.log(Object.keys(objMain))
console.log(Object.values(objMain))
console.log(Object.entries(objMain))
*/

// +++++++++++++++++ Part 3 ++++++++++++++++++++++++++++
const course = {
    courseName: "Sigma Batch",
    price: "Rs 3999",
    tutor: "PW"
}

// Destructurer
// Technique 1
const {price} = course
// console.log(price) // 3999

// Technique 2
const {tutor: instructor} = course
// console.log(instructor) // PW