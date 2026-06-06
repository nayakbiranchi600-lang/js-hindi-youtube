const myNums = [1,2,3,4,5]
// const myTotal = myNums.reduce(function(acc,currentVal){
//     console.log(`acc : ${acc} and curerentVal : ${currentVal}`);
//     return acc + currentVal
// },0)
const myTotal = myNums.reduce((acc,currentVal)=>acc+currentVal,0)
console.log(myTotal);
