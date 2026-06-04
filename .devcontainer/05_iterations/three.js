// forof loop
[" "," "," "]
[{},{},{}]

const arr = [1,2,3,4,5]
for (const i of arr) {
    // console.log(i);
}

const greetings = "Hello World"
for(const greet of greetings){
    // console.log(`Each Char is : ${greet}`);
}

// Maps
const map = new Map()
map.set("IN","India")
map.set("USA","United States America")
map.set("Fr","France")

// console.log(map);

for (const [key,value] of map) {
    console.log(key,"--",value);
}

// inthe case of object

const myObject = {
    "name1":"Biranchi",
    "name2":"Bapun"
}
for (const [key,value] of object) {
    // console.log(key,value); // out put is error so in this type of case we use for in loop
}

