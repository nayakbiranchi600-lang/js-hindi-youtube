
const user = {
    userName : "BIRANCHI",
    price: 999,
    welComeMessage : function(){
        console.log(`${this.userName} , Welcome to Website`);
        // console.log(this);
        
    }
}
user.welComeMessage()
// user.userName = "Bapun"
// user.welComeMessage()

console.log(this);

// const chai = function(){
//     // console.log(this);
//     console.log(this.userName);
// }
// chai()

const chai = () => { // arrow function
    // console.log(this);
    // console.log(this.userName); //its return output undefined 
    console.log(this); // it return output empty {}
}
chai() 

// Arrow function example
// const addTwo = (num1,num2) =>{ // explicit return (using return keyword)
//     return num1+num2
// } 
// console.log(addTwo(5,6));

const addTwo = (num1,num2) => num1+num2 // implicit return method(shorthand method in javascript arrow functions) (return keyward not required its automatically return the value )
console.log(addTwo(5,6));

const addtwo2 = (num3,num4) => (num3+num4) // Both are same
console.log(addtwo2(10,20));

const addtwo3 = (num5,num6) => ({username:"Nayak"})
console.log(addtwo3(30,40));


