function setUsername (username){
    this.username = username
}
function createUser (username, email, password){
    // this will just call but the reference context will be removed, so it will won't work
    // setUsername(username) 

    // by call method the reference context will not remove and 'this' keyword will replaced as outher 'this' keyword (upar wala this keyword ko replace krke yeh this keyword aa jayega)
    setUsername.call(this, username)
    this.email = email
    this.password = password
}
const chai = new createUser('yuvraj', 'yuvraj@fb.com', 123)
// console.log(chai)

// Example 2

function userName() { 
    let fullName = `${this.firstName} ${this.lastName}`
    return fullName
}

const user = {
    firstName: "Yuvraj", 
    lastName: "Singh"
}
const print = userName.call(user)
// console.log(print)


