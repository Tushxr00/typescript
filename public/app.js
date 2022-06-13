// interfaces
const me = {
    name: "shaun",
    age: 10,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log("I spent", amount);
        return amount;
    },
};
console.log(me);
// even when we are using typescript we use the ,js instead of .ts while importing
import { Invoice } from "./modules/Invoice.js";
const invOne = new Invoice("mario", "work on mario cart", 250);
const invTwo = new Invoice("luigi", "work on luigi cart", 350);
// console.log({invOne,invTwo})
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
const form = document.querySelector(".new-item-form");
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
