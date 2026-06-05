//CallBack Functions
// const coding = ["js","php","java","Python","cpp","Devops"]

// coding.forEach(function(items){ // Callback function
//     console.log(items); 
// })

// const coding = [ "js","php","java","python","cpp"]

// coding.forEach(function(items){ //Callback functions
//     console.log(items);
// })

// coding.forEach((items)=>{ // Callback arrow functions
//     console.log(items);
// })

// function printMe(items){ //callback function
//     console.log(items);
// }

// coding.forEach(printMe)


const coding = [ "js","php","java","python","cpp"]

coding.forEach((item,index,fullArray)=>{
    // console.log(item,index,fullArray);
})

//Object under Array

const myCoding = [
    {
        languageName : "JavsScript",
        languageFileName : "js"
    },
    {
        languageName : "PHP",
        languageFileName : "php"
    },
    {
        languageName : "Python",
        languageFileName : "pn"
    }
]

myCoding.forEach((items)=>{
    console.log(items.languageFileName);
    
})