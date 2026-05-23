// functions 

function sayMyName(){
    console.log("B");
    console.log("I");
    console.log("R");
    console.log("A");
    console.log("N");
    console.log("C");
    console.log("H");
    console.log("I");
}
// sayMyName//reference
// sayMyName()//execution

//------------------------------------------
// function addTwoNumber(number1,number2){
//     console.log(number1+number2);   
// }
// addTwoNumber(3,4)
// addTwoNumber(3,"4")
// addTwoNumber(3,"a")
// const totalresult = addTwoNumber(5,10) // print here 
// console.log(totalresult); // undefined

//------------------------------------------

function addTwoNumbers(num1,num2){
    let result = num1+num2
    return result
    console.log("Biranchi");// it is unrechable code after return any value not printed
}

const totalSum = addTwoNumbers(4,6)
console.log("Sum of two number is : ",totalSum);

// function loggedIn(userName="Bapun"){ // default value passed
function loggedIn(userName){
    // if(userName === undefined){
    //     console.log("Enter the username");
    //     return
    // }
    if(!userName){
        console.log("Enter the username");
        return
    }
    return `${userName} just logged in`
}
console.log(loggedIn("Biranchi Narayan Nayak"));
// console.log(loggedIn());

//1
// function calculateCartPrice(nump1){
//     return nump1
// }

//2
function calculateCartPrice(...nump1){
    return nump1
}
//3
function calculateCartPrice(val1,val2,...nump1){
    return nump1
}
// calculateCartPrice(2)
// console.log(calculateCartPrice(5));
// console.log(calculateCartPrice(200,300,400)); // it return 200 (1)
// console.log(calculateCartPrice(200,300,400)); // it return all as array (2)
console.log(calculateCartPrice(200,300,400,500)); // it return after val2 to till last element as array (3)

const user1 = {
    userName : "Biranchi Naarayan Nayak",
    price : 360
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.userName} and Price is ${anyObject.price}`);
    
}
// handleObject(user1)
handleObject({
    userName : "Biranchi",
    price : 399
})

const myArray = [200,300,400]
function returnSecondValue(newObject){
    return newObject[1]
}
console.log(returnSecondValue(myArray));
console.log(returnSecondValue([200,400,600]));




