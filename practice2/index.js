const d = new Date();

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let month = months[d.getMonth()];

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[d.getDay()];

let h = d.getHours();
let m = d.getMinutes();
let s = d.getSeconds();
let time = h + " :" + m + ":" + s;


document.getElementById("year").innerHTML = "Year: " + d.getFullYear();
document.getElementById("day").innerHTML = "Today is: " + day;
document.getElementById("date").innerHTML = "Date: " + d.getDate();
document.getElementById("month").innerHTML = "Month: " + month;
document.getElementById("curtime").innerHTML = "Current time: " + time;
