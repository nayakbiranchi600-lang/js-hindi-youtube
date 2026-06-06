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

const books = [
    {title:"Book one",genre:"Fiction",publish:2004},
    {title:"Book two",genre:"History",publish:2005},
    {title:"Book three",genre:"Web Development",publish:2006},
    {title:"Book four",genre:"Fiction",publish:2007},
    {title:"Book five",genre:"History",publish:2008},
    {title:"Book six",genre:"Web Development",publish:2009},
    {title:"Book seven",genre:"Fiction",publish:2010},
    {title:"Book eight",genre:"History",publish:2011},
    {title:"Book nine",genre:"Web Development",publish:2012},
    {title:"Book ten",genre:"Fiction",publish:2013},
    {title:"Book eleven",genre:"History",publish:2014},
    {title:"Book twelve",genre:"Web Development",publish:2015},
]
let userBooks = books.filter((bk) => bk.genre === "History" )
// userBooks = books.filter((bk)=>bk.publish>=2010)
userBooks = books.filter((bk)=>{return bk.publish>=2010 && bk.genre==="Web Development"})
console.log(userBooks);
