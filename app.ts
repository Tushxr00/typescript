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
let charecter = "mario"
let age = 22
let isAdult = true

// charecter = 30
charecter = "luigi"

// age = "yoshi"
age = 30

// isAdult = "yes"
isAdult = false

const circumferense = (diameter: number) => {
    return diameter * Math.PI
}

// allows us to type check during development 
console.log(circumferense(12))

// Array 

let names = ["luigi", "mario", "yoshi"]

names.push("toad")
// not assignable to the array
// names.push(8)
// not assignable to the array
// names[0] = 12

// how to have a mixed array
let mixed = ["ken", 4, "chun-li", 8, 9]
mixed.push("ryu-ji")
mixed.push(6)
mixed[0] = 3

// Objects