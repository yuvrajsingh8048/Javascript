function example(username = "Sam"){  // Sam is a default value
    return `${username}, welcome to our Platform....`
}
const res = example() // Sam will used as default
const res2 = example("Curran")  // Curran will overwrite Sam
// console.log(res)
// console.log(res2)  

// If no arguments is present with no parameters then function return undefined not null

function hello(userName){
    return `${userName} found becoz u haven't put any arguments`
}
// console.log(hello())

// If u dnt know the number of arguments are coming to insert into parameters
// Then use rest Operator

function calculateCartPrice(...num){  //... use as a rest operator
    return num
}

// console.log(calculateCartPrice(200, 400, 600, 800, 1000)) 
//just add infinity number of argumnets you dnt need to worry about parametrs

// Differrence between let const and Var , var => doen't follow scope proprties
var a = 10
let b = 20
const c = 30

if (true) {
    var a = 70
    let b = 80
    const c = 90
}

// console.log(a); 
// console.log(b);
// console.log(c);

// ************************** Closure **************************************** 
// (Child can use parent's variable but parents can't use child variable)


function one(){  // one -> parent
    let myName = "Klassen"

    function two(){  // two -> child
        let myNameTwo = "Matt Henry"
        // console.log(myName)
    }
    // console.log(myNameTwo)  You cant access this variable outside lexical scope
    two()
}
one()

// Declaration of function 

addOne(5)  // call before defining function 
function  addOne (num){
    return num + 1
}
// addTwo(5)  // this case will failed becoz of expression
const helloTwo = function addTwo (num){  // This will be treated as expression not function
    return num + 2
}