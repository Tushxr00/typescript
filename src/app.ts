// even when we are using typescript we use the ,js instead of .ts while importing
import { Invoice } from "./modules/Invoice.js"
import { Payment } from "./modules/Payment.js"
import { HasFormatter } from "./interfaces/HasFormatter.js"
import { ListTemplate } from "./modules/ListTemplate.js";

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice("yoshi", "web work", 250)
// docTwo = new Payment("mario", "plumbing work", 250)

// let docs: HasFormatter[] = []

// docs.push(docOne)
// docs.push(docTwo)

const form = document.querySelector(".new-item-form") as HTMLFormElement

// inputs

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// list template instance

const ul = document.querySelector("ul")!
const list = new ListTemplate(ul)

form.addEventListener("submit", (event: Event) => {
    event.preventDefault()

    let doc: HasFormatter

    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
    } else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
    }

    list.render(doc, type.value, "end")

})

// Generics

const addUID = <T extends { name: string }>(obj: T) => {
    let uid = Math.floor(Math.random() * 100)
    return { ...obj, uid }
}

let docOne = addUID({ name: "yoshi", age: 40 })
// as addUID extends object
// let docTwo = addUID("hiii")
console.log(docOne)

interface Resource<T> {
    uid: number;
    resourceNumber: string;
    date: T;
}

const docThree: Resource<string> = {
    uid: 123,
    resourceNumber: "hi",
    date: "shaun"
}