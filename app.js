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
console.log(circumferense("hello"));
