// Kuch case aisa hota hai jaha assume kiya jaata hai woh true hai yaa false

/*
Falsy Value = > false, 0, BigInt 0n, NaN, null, undefined, ""
*/

/*
Truthy Values => Except falsy all are truthy but some surprising examples are
"0", "false", " ", [], {}, function (){}  => they all are truthy values
*/

const user = NaN

if(user){
    console.log("Condition assume to be True")
}
else{
    console.log("Condtion assume to be False")
}