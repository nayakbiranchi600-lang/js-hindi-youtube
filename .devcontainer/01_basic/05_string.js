name = "Biranchi Narayan Nayak"
age = 25

console.log(`My name is ${name} and my age ${age}`);

const gameName = new String("Cricket")
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(0));
console.log(gameName.charAt(1));
console.log(gameName.charAt(2));
console.log(gameName.indexOf('k'));

const newString = gameName.substring(0,4)//negative value not allowed
console.log(newString);
// const anotherString = gameName.slice(0,4)//negative value allowed
const anotherString = gameName.slice(-1,4)//negative value allowed
console.log(anotherString);

const newName = "    Biranchi Narayan Nayak    "
console.log(newName);
// console.log(newName.trim());
// console.log(newName.trimStart());
console.log(newName.trimEnd());

const url = "https://biranchi.com/biranchi%20narayan%20nayak"
console.log(url);
console.log(url.replace("%20","-"));
console.log(url.includes('biranchi'));
console.log(url.includes('narayan'));
console.log(url.includes('nayak'));
console.log(url.includes('bapun'));

const fullName = "Biranchi Narayan Nayak"
console.log(fullName.split(" "));
const fullName2 = "Biranchi-Narayan-Nayak"
console.log(fullName2.split("-"));











