const myDate = new Date()

let date = myDate.getDate()
if(date < 10){
    date = "0" + date
}

let month = myDate.getMonth()
if(month < 10){
    month = "0" + month
}
let year = myDate.getFullYear()

let weekday = ["Monday", "Tueday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
let day = weekday[myDate.getDay()]

let hour = myDate.getHours()
if(hour < 10){
    hour = "0" + hour
}

let minutes = myDate.getMinutes()
if(minutes < 10){
    minutes = "0" + minutes
}

let seconds = myDate.getSeconds()
if(seconds < 10){
    seconds = "0" + seconds
}

let meridian = "AM"
if(hour > 12){
    hour =  hour - 12
    meridian = "PM"
    if(hour > 10){
        hour = "0" + hour
    }
}

console.log(`${date}/${month}/${year} ${hour}:${minutes}:${seconds} ${meridian} ${day}`);