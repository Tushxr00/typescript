var number = 12;
console.log(number);
var firstname = "luige";
console.log(firstname);
var input = document.querySelectorAll("input");
console.log(input);
input.forEach(function (input) {
    console.log(input);
});
/**
 * * tsc app.ts
 * "tsc app.ts" is complied or transpile only once and needs to be manually written in the terminal to transpile the file again
 * * tsc app.ts -w
 * by writting "tsc app.ts -w" we can watch a file and re complie or transpile it whenever there is any new changes to it
 *
 *
 */ 
