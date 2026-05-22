// singleton
//Object.create (contructor method)//singleton create here

//Object literals
const mySym = Symbol("key1")
const jsUser = {
    name : "Biranchi",
    "fullName":"Biranchi Narayan Nayak",
    age : 24,
    location : "Bhadrak",
    [mySym] : "myKey1",
    email: "nayak@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]
}
// console.log(jsUser.email);
// console.log(jsUser['email']);
// console.log(jsUser['name']);
// console.log(jsUser.fullName);
// console.log(jsUser['fullName']);
// console.log(jsUser[mySym]);
// console.log(typeof jsUser[mySym]);

// jsUser.email = "nayakbiranchi@gail.com"
// console.log(jsUser);
// Object.freeze(jsUser);//after freeze object any value cannot be change
// jsUser.email = "nayak123@gmail.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello jsUser");
    
}
console.log(jsUser.greeting());

jsUser.greetingTwo = function(){
    console.log(`Hello jsUser,${this.name}`);
}
console.log(jsUser.greetingTwo());






