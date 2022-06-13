// even when we are using typescript we use the ,js instead of .ts while importing
import { Invoice } from "./modules/Invoice.js";
import { Payment } from "./modules/Payment.js";
let docOne;
let docTwo;
docOne = new Invoice("yoshi", "web work", 250);
docTwo = new Payment("mario", "plumbing work", 250);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
// const invOne = new Invoice("mario", "work on mario cart", 250)
// const invTwo = new Invoice("luigi", "work on luigi cart", 350)
// // console.log({invOne,invTwo})
// let invoices: Invoice[] = []
// invoices.push(invOne)
// invoices.push(invTwo)
// invoices.forEach(inv => {
//     console.log(inv.client, inv.amount, inv.format())
// })
const form = document.querySelector(".new-item-form");
// inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    // console.log({
    //     type: type.value,
    //     tofrom: tofrom.value,
    //     details: details.value,
    //     amount: amount.valueAsNumber
    // })
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
// // interfaces
// interface isPerson {
//     name: string;
//     age: number;
//     speak(a: string): void;
//     spend(a: number): number;
// }
// const me: isPerson = {
//     name: "shaun",
//     age: 10,
//     speak(text: string): void {
//         console.log(text);
//     },
//     spend(amount: number): number {
//         console.log("I spent", amount);
//         return amount;
//     },
// };
// console.log(me)
