import { HasFormatter } from "../interfaces/HasFormatter"

//classes
class Invoice implements HasFormatter {
    // // read the value inside and outside the class , cant change the value
    // readonly client: string;
    // // read and change value inside the class, cant read or change the value outside the class
    // private details: string;
    // // read amd change value inside the class and outside the class
    // public amount: number;

    // doesnt work if we dont have these access modifiers
    constructor(
        readonly client: string,
        private details: string,
        public amount: number
    ) {

    }

    format() {
        return `${this.client} owes £${this.amount} for ${this.details} `
    }
}

export { Invoice }