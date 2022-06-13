"use strict";
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
let charecter = "mario";
let age = 22;
let isAdult = true;
// charecter = 30
charecter = "luigi";
// age = "yoshi"
age = 30;
// isAdult = "yes"
isAdult = false;
const circumferense = (diameter) => {
    return diameter * Math.PI;
};
// allows us to type check during development 
console.log(circumferense(12));
// Array 
let names = ["luigi", "mario", "yoshi"];
// names = 12
names.push("toad");
// not assignable to the array
// names.push(8)
// not assignable to the array
// names[0] = 12
// how to have a mixed array
let mixed = ["ken", 4, "chun-li", 8, 9];
mixed.push("ryu-ji");
mixed.push(6);
mixed[0] = 3;
// Objects
let ninja = {
    name: "mario",
    belt: "black",
    age: 30,
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
let person;
let currentAge;
let isLoggedIn;
age = 30;
isLoggedIn = true;
person = "naruto";
// arrays
let shinobis = [];
shinobis = ["kakashi", "itachi"];
shinobis.push("sasuke");
// union types
//  meed brackets
let mixedArray = [];
mixedArray.push("hello");
mixedArray.push(20);
// Wrong data type pushed
// mixedArray.push(false)
let uid;
uid = "123";
uid = 123;
// objects
let shinobiOne;
shinobiOne = {
    name: "yoshi",
    age: 30
};
// doesnt throw an error as array is a type of object
shinobiOne = [];
// we can use inference to make typescript know the type of object we need 
let shinobiTwo;
shinobiTwo = {
    name: "mario",
    age: 20
};
let shinobiThree;
shinobiThree = {
    name: "madara",
    age: 10000,
    isGod: true,
};
/**
 * Any makes the type , any whichmeans the variable ca
 */
let ageNumber = 25;
ageNumber = true;
ageNumber = "mario";
ageNumber = { name: "luigi" };
console.log("hello");
