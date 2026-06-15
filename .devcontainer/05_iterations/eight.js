const myNums = [1,2,3,4,5]
const myTotal = myNums.reduce(function(acc,curntval){
    return acc+curntval
},0)
console.log((myTotal));

const myimplisit_return = myNums.reduce((acc,curr)=>(acc+curr),0)
console.log(myimplisit_return)

const shoppingCart = [
    {
        itemName:"Js Course",
        price: 999
    },
    {
        itemName:"Java Course",
        price: 599
    },
    {
        itemName:"Python Course",
        price: 399
    },
    {
        itemName:"PHP Course",
        price: 1299
    }
]

const totalPrice = shoppingCart.reduce((acc,item)=> (acc+item.price),0)
console.log(totalPrice);

