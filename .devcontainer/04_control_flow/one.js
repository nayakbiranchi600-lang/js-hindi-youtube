// If

// if (3!=2) {
//     console.log("Executed");  
// }

//<,>,<=,>=,==,===,!==

// if (2==="2") { // its return true
//     console.log(true);  
// }

// if (2==="2") { // its return false because both are not same datatype (=== checks datatype)
//     console.log(true);  
// }

// const temperature = 41
// if(temperature === 40){
//     console.log("Temperature under 50 degree celcious");  
// }else{
//     console.log("Temperature is greaterthan 50 degree celcious");
// }

// const score = 200
// if(score>100){
//     const power = "fly"
//     console.log(`User power:${power}`);   
// }
//  console.log(`User power:${power}`); 

//const balance = 1000;
//// if(balance>500)console.log("Test"); // implicit scope (its execute in one line)

// if(balance<500){
//     console.log("less than 500");   
// }else if(balance<700){
//     console.log("less then 700");
// }else if(balance<900){
//     console.log("less than 900");
// }else{
//     console.log("less then 1200");
// }

// const userLoggedIn = true
// const debitCard = true

// if(userLoggedIn && debitCard){
//     console.log("Allow buy course");
// }
// if(userLoggedIn && debitCard && 2==3){
//     console.log("Allow buy 2course");
// }

// const loggedInFromGoggle = true
// const loggedInFromEmail = true
// const guastLoggedIn = true

// if(loggedInFromGoggle && loggedInFromEmail && guastLoggedIn){
//     console.log("User Logged in");   
// }

// Switch Case
//syntax of switc case in javaScript
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }
//
// let month = 5
// switch(month){
//     case 1 : 
//         console.log("January");
//         break;
//     case 2 : 
//         console.log("February");
//         break;
//     case 3 :
//         console.log("March");
//         break;
//     case 4 :
//         console.log("April");
//         break;
//     default:
//         console.log("default case match");
//         break;
// }   
let month = "march"
switch(month){
    case "january" : 
        console.log("January");
        break;
    case "february" : 
        console.log("February");
        break;
    case "march" :
        console.log("March");
        break;
    case "april" :
        console.log("April");
        break;
    default:
        console.log("default case match");
        break;
}   
