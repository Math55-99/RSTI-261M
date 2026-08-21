let keyboardPrice = 249.90
let mousePrice = 119.90
let headsetPrice = 349.90

console.log (`Headset: ${headsetPrice.toLocaleString("pt-BR", { style: "currency", currency: "BRL"})},
Mouse: ${mousePrice.toLocaleString("pt-BR", { style: "currency", currency: "BRL"})},
Keyboard: ${keyboardPrice.toLocaleString("pt-BR", { style: "currency", currency: "BRL"})}`)

console.log (`Total value: ${(keyboardPrice + mousePrice + headsetPrice).toLocaleString("pt-BR", { style: "currency", currency: "BRL"})}, 
Average value: ${((keyboardPrice + mousePrice + headsetPrice) / 3).toLocaleString("pt-BR", { style: "currency", currency: "BRL"})}, 
How much change is left if paid with 1,000.00? ${(1000 - (keyboardPrice + mousePrice + headsetPrice)).toLocaleString("pt-BR", { style: "currency", currency: "BRL"})}`)

