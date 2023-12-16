class user {
    constructor(username) {
        this.username = username
    }
    logme() {
        console.log(`Your username is ${this.username}`)
    }
}

class teacher extends user {
    constructor(username, email, password) {
        super(username) // yeh automatically user constructor k paas jayega aur waha se username ko utha kr le aayega *****Powerful keyword*******
        this.email = email
        this.password = password
    }
    addCourse() {
        console.log(`A new course was added by ${this.username}`)
    }
}
const chai = new teacher("yuvraj", "yuvraj@fb.com", 123)
const masalaChai = new user("Masala Chai")
// chai.addCourse()
// masalaChai.logme()
// chai.logme() // teacher allow to use user funcntion
// user.addCourse() // user don't allow to use addCourse function

console.log(chai instanceof teacher) // true
console.log(chai instanceof user) // true
