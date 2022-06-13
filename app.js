// const number = 12;
// console.log(number);
// const firstname = "luige";
// console.log(firstname)
// const input = document.querySelectorAll("input")
// console.log(input)
// input.forEach(input=>{
//     console.log(input)
// })
/**
 * * tsc app.ts
 * "tsc app.ts" is complied or transpile only once and needs to be manually written in the terminal to transpile the file again
 * * tsc app.ts -w
 * by writting "tsc app.ts -w" we can watch a file and re complie or transpile it whenever there is any new changes to it
 *
 *
 */
/**
 * Typescript infers the type based on the
 * value it sees is being assigned
 */
var charecter = "mario";
var age = 22;
var isAdult = true;
// charecter = 30
charecter = "luigi";
// age = "yoshi"
age = 30;
// isAdult = "yes"
isAdult = false;
var circumferense = function (diameter) {
    return diameter * Math.PI;
};
// allows us to type check during development 
console.log(circumferense(12));
// Array 
var names = ["luigi", "mario", "yoshi"];
// names = 12
names.push("toad");
// not assignable to the array
// names.push(8)
// not assignable to the array
// names[0] = 12
// how to have a mixed array
var mixed = ["ken", 4, "chun-li", 8, 9];
mixed.push("ryu-ji");
mixed.push(6);
mixed[0] = 3;
// Objects
var ninja = {
    name: "mario",
    belt: "black",
    age: 30
};
ninja.age = 40;
ninja.name = "ryu";
// ninja.age ="30"
// ninja.name = 1202
// since it was not declared during creation it will throw an error
// ninja.skills = ["fighting","sneaking"]
/**
 * since the object doesnt have the same format , as to when it was intiliazed
 * Hence it throws an error
 * Hence we cant add or remove the object properties after intializing
 */
// ninja = {
//     name: "yoshi",
//     belt: "orange",
// }
// axplicit types
var person;
var currentAge;
var isLoggedIn;
age = 30;
isLoggedIn = true;
person = "naruto";
// arrays
var shinobis = [];
shinobis = ["kakashi", "itachi"];
shinobis.push("sasuke");
// union types
var mixedArray = [];
mixedArray.push("hello");
mixedArray.push(20);
// Wrong data type pushed
// mixedArray.push(false)
// objects
