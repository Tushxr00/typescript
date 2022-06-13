//classes
class Payment {
    // // read the value inside and outside the class , cant change the value
    // readonly recipient: string;
    // // read and change value inside the class, cant read or change the value outside the class
    // private details: string;
    // // read amd change value inside the class and outside the class
    // public amount: number;
    // doesnt work if we dont have these access modifiers
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} is owed £${this.amount} for ${this.details} `;
    }
}
export { Payment };
