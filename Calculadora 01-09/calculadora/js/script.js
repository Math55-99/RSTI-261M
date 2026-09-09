const result = document.querySelector(".cal__result");
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const button = document.querySelector(".button__addition");
const button2 = document.querySelector(".button__subtraction");
const button3 = document.querySelector(".button__multiplication");
const button4 = document.querySelector(".button__division");
const button5 = document.querySelector(".button__percent");
const button6 = document.querySelector("#reset");


button.addEventListener("click", function () {
    result.textContent = Number(num1.value) + Number(num2.value)
})

button2.addEventListener("click", function () {
    result.textContent = Number(num1.value) - Number(num2.value)
})

button3.addEventListener("click", function () {
    result.textContent = Number(num1.value) * Number(num2.value)
})

button4.addEventListener("click", function () {
    result.textContent = Number(num1.value) / Number(num2.value)
})

button5.addEventListener("click", function () {
    result.textContent = Number(num1.value) * Number(num2.value) / 100
})

button6.addEventListener("click", function () {
    num1.value = "";
    num2.value = "";
    result.textContent = 0
})
