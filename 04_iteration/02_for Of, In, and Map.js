// for of  => to return values
// for in  => to return both values and keys
// map => to store unique values in key-value pairs
// Tip => object -> for in ,     array -> for of

// for in
const capital = {
    "Tamil Nadu": "Chennai",
    "Maharashtra": "Mumbai", 
    "Goa": "Panaji",
    "West Bengal": "Kolkata"
}

for (const key in capital) {
        // console.log(`State : ${capital[key]}`);
    
}

// for of
const city = "HELLO DELHI"
for (const val of city){
    //  console.log(val)
}

// map
let mapOne = new Map()
mapOne.set('IN','INDIA')
mapOne.set('USA', 'United States of America')
mapOne.set('UK', 'United Kingdom')
mapOne.set('IN', 'INDIA')  // It will not store in map coz map store unique values only.....Case Sensitive for KEYS only not for Values

console.log(mapOne)

// To store Key Value in interesting way.....
// This method can only be run in Map
for (let [key, value] of mapOne){
    // console.log(`${key} :- ${value}`)  // Both key and value are in string
}

const myObject = {
    gameOne: "BGMI",
    gameTwo: "Free Fire",
    gameThree: "Moto GP",
    gameFour: "Real Cricket",
    gameFive: "Real Football"
}

/* This will not run like MAP

for (let [key, value] of myObject){
    console.log(`${key} :- ${value}`)
}
*/

// This will run in this way..........

for (const key in myObject){
    // console.log(`${key} :- ${myObject[key]}`)
}
