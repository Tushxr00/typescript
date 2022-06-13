//classes
class Invoice {
    // read the value inside and outside the class , cant change the value
    readonly client: string;
    // read and change value inside the class, cant read or change the value outside the class
    private details: string;
    // read amd change value inside the class and outside the class
    public amount: number;

    constructor(c:string,d:string,a:number){
        this.client = c
        this.details = d
        this.amount = a
    }

    format(){
        return `${this.client} owes £${this.amount} for ${this.details} `
    }
}
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
