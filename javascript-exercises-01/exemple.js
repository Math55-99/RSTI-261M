let dinheiro = 1000

console.log(`Valor: ${dinheiro.toLocaleString("pt-BR", { style: "currency", currency: "BRL"})}`)
console.log()



let keyboardPrice = 249.90
let mousePrice = 119.90
let headsetPrice = 349.90

console.log (`Total Value: ${(keyboardPrice + mousePrice + headsetPrice).toFixed(2)}`)





// No terminal escreva o comando npm install readline-sync

// Depois coloque no codigo uma const ask = require('readline-sync')

// Depois coloque as variáveis usando ask.question() ou Number(ask.question()) para pegar os valores do teclado

