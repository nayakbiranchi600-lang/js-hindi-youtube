// -----Primitive Datatypes-----
const score = 100 // number
const scoreValue = 100.3 // number
// console.log(typeof scoreValue);

const isLoggedIn = false // boolean
// console.log(typeof isLoggedIn);

const outSideTemp = null // null
// console.log(typeof outSideTemp);

let userEmail = undefined // undefined
// console.log(typeof userEmail);

const id = Symbol("123") // symbol
const anotherId = Symbol("123") // symbol
// console.log(id === anotherId); // both are deferent
// console.log(typeof id);
// console.log(typeof anotherId);

const bigNumber = 8093650044n // bigInt  // n in last is mandatory
// console.log(typeof bigNumber);

//-----Non-primitive Datatypes -----

const super_heros = ["saktiman","nagaraj","krish"]; // array
// console.log(typeof super_heros);

let obj = {
    name:"Biranchi Narayan Nayak",
    roll_no:"25MCA609",
    dept:"Computer Application"
}
// console.log(typeof obj);

const myFunction = function(){
    print("Hello Biranchi")
}
// console.log(typeof myFunction);


//----------------------------------------------------
//-----Stack(Primitive), Heap(Non-Primitive)-----
let myYoutubeChannel = "RTN WORLD IT FOR YOU"
let anotherChannel = myYoutubeChannel

anotherChannel = "Yahoo Baba"
console.log(anotherChannel);
console.log(myYoutubeChannel);

let userOne = {
    email:"biranchigoogle.com",
    upi:"upiuser@ybl"
}
let userTwo = userOne
userTwo.email = "nayakgoogle123@gmail.com"
console.log(userOne.email)
console.log(userTwo.email)

