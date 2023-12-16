class user {
    constructor (username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }
    printMe(){
        console.log(`${this.username} has an ${this.email} mail with a password ${this.password}`)
    }
}
const myclass = new user("yuvraj", "yuvi@fb.com", 123)
myclass.printMe()

// This above example can also be done by prototype method
function newUser(username, email, password) {
    this.username = this.username
    this.email = this.email
    this.password = this.password
}
Object.prototype.printMeAgain = function() {
    console.log(`${this.username} has an ${this.email} mail with a password ${this.password}`)
}
const result = new newUser("robin", "robin@google.com", 123)
