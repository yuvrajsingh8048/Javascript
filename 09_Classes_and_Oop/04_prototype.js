const arr = ['batman', 'spiderman']
const myObj = {
    name1: "thor",
    name2: "ironman"
}

// Want to create new prototype method

// This method applicable to function, object, array and string
Object.prototype.newMethod = function (){
    console.log(`This has been created new prototype method`)
}

Array.prototype.newArrayMethod = function() {
    console.log(`This method only applicable to array`)
}

// arr.newArrayMethod()
// arr.newMethod()
// myObj.newArrayMethod()  This will give error it only applible in array
// myObj.newMethod()

const user = {
    isLogin: true,
    paid: true
}
const teacher = {
    makeVideo: true,
    male: false,
    female: true
}
const teachingSupport = {
    makeAssignment: true,
    makeNotes: true,
    __proto__:teacher      // Outdated version to set prototype
}
// Modern version to set Prototype
Object.setPrototypeOf(teachingSupport, teacher)

console.log(teachingSupport.makeVideo)

