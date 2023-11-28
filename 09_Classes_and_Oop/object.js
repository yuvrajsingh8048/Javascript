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
createUser.prototype.increment = function() {
    this.score++
}
createUser.prototype.printMe = function() {
    console.log(`Your Score of ${this.game} is ${this.score}`)
}
createUser.prototype.increment = function() {
    console.log(`Your score has been added by ${this.score} to ${this.score + 1}`)
}
const gameOne = new createUser("bgmi", 37)
const gameTwo = new createUser("free fire", 14)
gameOne.printMe()
gameTwo.increment()
