//Dates 

let myDate = new Date() 
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

let myCreateDate = new Date(2026,4,17) //(year,month(0-11),date)
// console.log(myCreateDate);
// console.log(myCreateDate.toString());
console.log(myCreateDate.toDateString());

let newDate = new Date(2026,4,17,12,6)
// console.log(newDate.toLocaleString());


let formatDate = new Date("2026-05-17")
// console.log(formatDate.toLocaleString());

let creatDate = Date.now()
// console.log(creatDate);
// console.log(formatDate.getTime());
// console.log(Date.now()/1000);
// console.log(Math.floor(Date.now()/1000));

let newDate2 = new Date()
// console.log(newDate2);
// console.log(newDate2.getMonth());
// console.log(newDate2.getDay());
// console.log(newDate2.getHours());
// console.log(newDate2.getTime());

newDate2.toLocaleString('default',{
    weekday:"long"
})
console.log(newDate2.toLocaleString());








