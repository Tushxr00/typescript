// even when we are using typescript we use the ,js instead of .ts while importing
import { Invoice } from "./modules/Invoice.js";
import { Payment } from "./modules/Payment.js";
import { ListTemplate } from "./modules/ListTemplate.js";
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice("yoshi", "web work", 250)
// docTwo = new Payment("mario", "plumbing work", 250)
// let docs: HasFormatter[] = []
// docs.push(docOne)
// docs.push(docTwo)
const form = document.querySelector(".new-item-form");
// inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// list template instance
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (event) => {
    event.preventDefault();
    // using tuples to specify the type of data in the array 
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, "end");
});
