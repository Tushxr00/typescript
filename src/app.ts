// const anchor = document.querySelector("a")!;

// // if (anchor) {
// //     console.log(anchor.href)
// // }

// console.log(anchor.href)

// const form = document.querySelector("form")!
// dont need ! at the end while using as
const form = document.querySelector(".new-item-form") as HTMLFormElement
// console.log(form.children)

// inputs

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (event: Event) => {
    event.preventDefault()
    console.log({
        type:type.value,
        tofrom:tofrom.value,
        details:details.value,
        amount:amount.valueAsNumber
    })
})
