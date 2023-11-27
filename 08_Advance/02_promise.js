// *********************** Promise 1 ***********************
/*
const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log(`Promise one is completed`)
         resolve()
        // reject()
    }, 1000)
})

promiseOne.then(function(){
    console.log(`Resolve is directly connected to then`)
})

promiseOne.catch(function (e){
    console.log(`Reject is directly connected to catch`)
})
*/

// ************************ Promise 2 *************************
/*
const promiseTwo = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({userId : "yuvrajingh8048", platform : "github", email : "yuvrajsingh001750@gmail.com"})
    }, 1000)
})

promiseTwo.then(function (userDetails){
    console.log(userDetails)
})
*/

//****************** Promise 3 ******************
/*
const promiseThree = new Promise(function(resolve, reject){
    let error = true
    if(!error){
        resolve({userName : "yuvraj_singh_8048", platform : "instagram"})
    }
    else{
        reject("Error : Something went wrong")
    }
})

promiseThree
.then(function(user){
    console.log(user)
    return user.userName
})
.then(function(myUserName){
    console.log(myUserName)
})
.catch(function(err){
    console.log(err)
})
.finally(function(){
    console.log(`Promise is getting resolved or rejected`)
})

*/


//****************** Promise 4 **************************
/*
const promiseFour = new Promise(function (resolve, reject) {
    let error = true
    if(!error){
        resolve({username : "yuvraj_8048", platform : "snapchat"})
    } else{
        reject("Error : Something went wrong")
    }
})

async function consumePromiseFour (){
    try {
        const response = await promiseFour
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFour()
*/

//***************  Promise 5  ***************************

async function consumePromiseFive(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        // console.log(data)
        data.forEach((item) => {
            console.log(`${item.name} : ${item.phone}`)
        })
    } catch (error) {
        console.log(`Error : Something went wrong!!!`)
    }
}
consumePromiseFive()