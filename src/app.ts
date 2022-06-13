// even when we are using typescript we use the ,js instead of .ts while importing
import {Invoice} from "./modules/Invoice.js"


const invOne = new Invoice("mario","work on mario cart", 250)

const invTwo = new Invoice("luigi","work on luigi cart", 350)

// console.log({invOne,invTwo})

let invoices : Invoice[]=[]

invoices.push(invOne)
invoices.push(invTwo)

invoices.forEach(inv =>{
    console.log(inv.client,inv.amount,inv.format())
})

const form = document.querySelector(".new-item-form") as HTMLFormElement

// inputs

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (event: Event) => {
    event.preventDefault()
    console.log({
        type: type.value,
        tofrom: tofrom.value,
        details: details.value,
        amount: amount.valueAsNumber
    })
})
