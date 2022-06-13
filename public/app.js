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
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, "end");
});
// Enums 
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const docOne = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: { title: "name of the wind" },
};
const docTwo = {
    uid: 4,
    resourceType: ResourceType.PERSON,
    data: { name: "yoshi" },
};
console.log({ docOne, docTwo });
