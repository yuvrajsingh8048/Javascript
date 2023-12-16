const pie = Math.PI.toFixed(2)
const editPie = Object.getOwnPropertyDescriptor(Math, 'PI')

// console.log(editPie)
const chai = {
    name: "ginger chai",
    price: 25,
    isAvailable: true,

    negative: function(){
         console.log(`Doodh fat gaya, Chai nhi bni`)
    }
}
// Default Object Propert
// console.log(Object.getOwnPropertyDescriptor(chai, 'name'))

// Manually Created Object Property
Object.defineProperty(chai, 'name', {
    writable: false,
    // enumerable: false,
    configurable: true,
    // looping: false // this manually property can't be create by own
})
// console.log(Object.getOwnPropertyDescriptor(chai, 'name'))


// It can be iterable through for in loop easily
// for(let key in chai){
//     console.log(`${key} : ${chai[key]}`)
// }

// Object can not be iterable in for of loop
for(let [key, value] of Object.entries(chai)){  // to object iterable we use Object.entries
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`)
    }
    else{
        console.log(`Fucntion nhi laane k liye if else use krna pda`)
    }
}

