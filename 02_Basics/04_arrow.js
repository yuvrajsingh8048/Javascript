const user = {
    userName: "Harry", 
    coursePrice: 999,
    greet: function (){
        // console.log(`Hello ${this.userName}, welcome to our website...`)
    }
    // "This" refers to current context
}
// user.greet()

// console.log(this) 
// this will return as empty object but in browser it will return as window

// This method is called explicit 
const one = () => {
    return "Chai Lob hai hamara!!!"
}
// console.log(one())

// ShortCut for Arrow Function => Implicit
const two = () => ("I dnt like Coffee!!!!") // () => no need to use return keyword but in {} case you must use return keyword
// console.log(two())

const three = () => ({someTruth: "Both Chai and Coffee are my Lob"}) // Implicit by returning an Object        *********** Interesting......
// console.log(three())