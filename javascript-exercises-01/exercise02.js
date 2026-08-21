let videogame = "Playstation 5"
let manufacturer = "Sony"
let price = 549.99
let storage = 825
let reader = true

console.log(`Console name: ${videogame}, 
Manufacturer: ${manufacturer}, 
Price: ${price.toLocaleString("pt-BR", { style: "currency", currency: "BRL"})}, 
Storage: ${storage}GB, 
Disc Reader: ${reader ? "Yes" : "No"}`)