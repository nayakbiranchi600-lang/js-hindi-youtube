// Scope 
//Scope defiend as {} (curlybrackets)
// var c = 300
let a = 200;
if(true){
    let a =10;
    const b = 20;
    // var c = 30;
    // console.log("Inner Value : ",a);
    
}
// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const userName = "Biranchi"
    function two(){
        const webSite = "Youtube"
        console.log(userName);    
    }
    // console.log(webSite);
    two()
    
}
one()

if(true){
    const userName2 = "Biranchi Narayan Nayak"
    if(userName2 === "Biranchi Narayan Nayak"){
        const webSite2 = " Mahindra"
        console.log(userName2+webSite2);
    }
    // console.log(webSite2); 
}
// console.log(userName2);


// ++++++++++++++++++++++ Interesting ++++++++++++++++++++
console.log(addOne(5)); // in case of direct function declaration function call before declaration is possible
function addOne(num){
    return num+1
}

// console.log(addTwo(5)); // it give output error because in case of variable function declaration function call before declaration is not possible
const addTwo = function(num){
    return num+2
}
console.log(addTwo());
 
