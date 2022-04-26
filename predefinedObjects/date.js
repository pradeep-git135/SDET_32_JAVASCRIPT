let d = new Date();
console.log("date = "+d.getDate());
console.log("day = "+ d.getDay());
console.log("month = "+d.getMonth());
console.log("year = "+d.getFullYear());
console.log("todays date = "+d.toDateString());
console.log("===========================================");

let MonthArray = ["January", "February", "March", "APril", "May", "June", "julay", "August", "September", "October", "November", "Desember"]
let WeekArray = ["Sunday", "Monday", "Tuesday", "Thursday", "Friday", "Saturday"]

console.log(MonthArray[d.getMonth()]);

console.log(WeekArray[d.getDay()]);