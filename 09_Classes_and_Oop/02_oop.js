const myObj = {
    userName: "yuvrajsingh8048",
    fullName: "Yuvraj Singh",
    platform: "github",
    logIn: true,
    greet: function (){
        console.log(`Hello ${this.fullName}, welcome to ${this.platform}`)
    }
}
// console.log(myObj.greet())

function user(username, isLogin, loginCount){
    this.username = username
    this.isLogin = isLogin
    this.loginCount = loginCount

    return this
}

const userOne = new user("yuvraj", true, 8)
const userTwo =  user("jimmy", false, 5) // if not use 'new' method then userThree will overwrite userTwo
const userThree = user("thor", true, 2)
console.log(userOne)
console.log(userTwo)
console.log(userThree)