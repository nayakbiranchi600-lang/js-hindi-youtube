// For loop
// for( let i = 0;i<=10;i++){
//     const element = i;
//     if(element == 5){
//         console.log("5 element is matched ");
        
//     }
//     console.log(element);
// }
// console.log(element); // it return error because element is not define in out side of function

// for(let i = 1;i<=10;i++){
//     console.log(`outer loop value is ${i}`);
//     for(let j = 1;j<=10;j++){
//         // console.log(`inner loop value is ${j} and inner loop ${i}`);  
//         console.log(i +'*'+ j +'='+ i*j); 
//     }
// }

// let myArray = ["flash","superman","batman"]
// for(let index = 0;index<myArray.length;index++){
//     const element = myArray[index];
//     console.log(element); 
// }

for(let i = 1;i<=20;i++){
    if(i==5){
        console.log("5 is the best number");
        // break  // Its terminate the loop 
        continue // Its skip the current element
    }
    console.log(`The value of i is : ${i}`); 
}