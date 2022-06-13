"use strict";
// const anchor = document.querySelector("a")!;
// // if (anchor) {
// //     console.log(anchor.href)
// // }
// console.log(anchor.href)
// const form = document.querySelector("form")!
// dont need ! at the end while using as
const form = document.querySelector(".new-item-form");
// console.log(form.children)
// inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log({
        type: type.value,
        tofrom: tofrom.value,
        details: details.value,
        amount: amount.valueAsNumber
    });
});
