let name = "pwskills"
let repoCount = 5
// console.log(str + repoCount + " Value")  Outdated

// console.log(`My education channel is ${name.toUpperCase()} and my repocount is ${repoCount}`)

// console.log(name.__proto__) Return as object

// String Properties

console.log(name.charAt(1))
console.log(name.indexOf('l'))
console.log(name.substring(0, 4)) // if there is neg. value it will treat as 0
console.log(name.slice(-8, 4)) // same as substring but here you can add negative number


let url = "http://pwSkills.com%50/query?=string/js"
console.log(url.replace("%50", "%100"))