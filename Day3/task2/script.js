//Assignment 2
const names = ["Aarav", "Sanya", "Vikram", "Neha", "Rohan", "Priya", "Amit", "Meera", "Rajiv", "Ananya"];
let head = document.getElementById("heading");

// Set the initial text
let index = 0;
head.innerText = names[index];

next = () => {
    index = (index + 1) % names.length;
    head.innerText = names[index];
}

previous = () => {
    index = (index - 1 + names.length) % names.length;
    head.innerText = names[index];
}
