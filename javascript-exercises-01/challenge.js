let product = "Notebook Gamer"
let price = 5000
let amount = 2
    
console.log(`Product: ${product} - Price: ${(price).toLocaleString("pt-BR", { style: "currency", currency: "BRL"})} - Amount: ${amount}`);

let total = price * amount;
console.log(`Total: ${total.toLocaleString("pt-BR", { style: "currency", currency: "BRL"})}`);

if (total > 5000) {
  console.log(`You crossed the line!`);
} else {
  console.log(`You are within the limit.`);
}