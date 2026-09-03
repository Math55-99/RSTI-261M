const result = document.querySelector(".result");
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const button = document.querySelector("#addition");
const button2 = document.querySelector("#subtraction");
const button3 = document.querySelector("#multiplication");
const button4 = document.querySelector("#division");
const button5 = document.querySelector("#percent");
const button6 = document.querySelector("#reset");


button.addEventListener("click", function() {
    result.textContent = Number(num1.value) + Number(num2.value)
})

button2.addEventListener("click", function() {
    result.textContent = Number(num1.value) - Number(num2.value)
})

button3.addEventListener("click", function() {
    result.textContent = Number(num1.value) * Number(num2.value)
})

button4.addEventListener("click", function() {
    result.textContent = Number(num1.value) / Number(num2.value)
})

button5.addEventListener("click", function() {
    result.textContent = Number(num1.value) * Number(num2.value) / 100
})

button6.addEventListener("click", function() {
    result.textContent = 0
})


