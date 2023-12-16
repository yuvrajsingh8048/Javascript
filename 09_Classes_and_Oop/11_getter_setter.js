// Getter and Setter in class (95% used)
class user {
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }
    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password = value
    }
}
const chai = new user('Ginger Chai', "chai@ai.com", "123abc")
// console.log(chai.password)



// Getter and setter in function (4% used)
function newUser(username ,email, password) {
    this._username = username
    this._email = email
    this._password = password

    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value) {
            this._password = value
        }
    })
}

const newChai = new newUser('Masala Chai', 'mchai@lob', '123xyz')
// console.log(newChai.password)


// Getter and Setter in Object (Very rarely used)
const helloUser = {
    _username: "Tandoori Chai", 
    _email: "tchai@ai",
    _password: '123pqr',

    get password() {
        return this._password.toUpperCase()
    },
    set password(value) {
        this._password = value
    }
}
const tea = Object.create(helloUser)
console.log(tea.password)