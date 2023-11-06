const accountId = 123456
let accountName = "Yuvraj"
var accountCity = "Kolkata"
accountEmail = "yuvraj@google.com"
let accountCountry;

// accountId = 789456 This is not allowed

/*
Prefer not to use var because
of issue in block scope and
functional scope
*/

accountName = "Golu"
accountCity = "Mumbai"
accountEmail = "golu@gmail.com"



console.table([accountName, accountCity, accountEmail, accountCountry])