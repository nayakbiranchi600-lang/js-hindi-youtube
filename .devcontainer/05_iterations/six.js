const coding = ["js","PHP","Java","Python","Swift","Cpp"]

const values = coding.forEach((items)=>{
    // console.log((items));  
    return items;
})
// console.log(values);

// filter
const myNums = [1,2,3,4,5,6,7,8,9,10]

// const numbers = myNums.filter((nums) => nums > 4) // Implicit return
const numbers = myNums.filter((nums)=>{
    return nums>4
})
console.log(numbers);

const numbers1 = []
myNums.forEach((nums)=>{
    if(nums>4){
        numbers1.push(nums)
    }
})
console.log(numbers1);
