/* if(condition){
    // Code
}
*/

/*
&& => AND Operator
|| => OR Opreator
?? => Nullish Coalescing Operator
*/

// Example of Nullish Coalescing Operator => Yeh especially null or undefined ko tackle krne ke liye bna hai..............

let varOne, varTwo, varThree;
varOne = 5 ?? 10   // Agr 5 nhi mila toh 10 use kr lo, yeh sab database me kaam ata hai
varTwo = null ?? 15 // Zaruri nhi hai sirf pehla wala hi assign ho

varThree = undefined ?? 20 


console.log(varOne)
console.log(varTwo)
console.log(varThree)






const ch = 4

switch(false){
    case 1: console.log("Sunday")
    break; 
    case 2: console.log("Monday")
    break; 
    case 4: console.log("Wednesday")
    break; 
    case 5: console.log("Thursday")
    break; 
    case 6: console.log("Friday")
    break; 
    case 7: console.log("Saturday")
    break; 
    case 18: console.log("Tuesday")
    break; 
}