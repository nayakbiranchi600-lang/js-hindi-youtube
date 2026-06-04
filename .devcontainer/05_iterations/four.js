// forin loop
const  myObject = {
    js:"JavaScript",
    cpp:"C++",
    njs:"NodeJS",
    swift:"Swift by Apple"
}
for (const key in myObject) {
    console.log(`${key} is shortcut for ${myObject}`);
}