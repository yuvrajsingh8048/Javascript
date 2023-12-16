function multiply(num) {
    return num*5
}
multiply.power = 2

// console.log(multiply(5))
// console.log(multiply.power)
// console.log(multiply.prototype)

// Function -> Object -> Null
// Array -> Object -> Null
// String -> Object -> Null
// Function, Array and String all are prototypical

function createUser(game, score) {
    this.game = game
    this.score = score
}
createUser.prototype.printMe = function() {
    console.log(`Your Score of ${this.game} is ${this.score}`)
}
createUser.prototype.increment = function() {
    console.log(`Your score of ${this.game} has been added by ${this.score} to ${this.score + 1}`)
}
const gameOne = new createUser("BGMI", 37)
const gameTwo = new createUser("Free Fire", 14)
// gameOne.printMe()
gameOne.increment()
gameTwo.increment()

/*
Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new Javascript object.

A prototype is linked: The newly created object gets linked to the prototype of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor. Javascript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor funcntion has been called, if it doesn't return a new primitive value (object, array, function, etc.), the newly created object is returned.
*/
