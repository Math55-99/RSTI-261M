

const ask = require(`readline-sync`)




let nameCompleted = ask.question(`insert your Name: `)
let age = ask.questionInt(`insert your Age: `)
let city = ask.question(`insert your City: `)
let enrolled = ask.keyInYNStrict(`insert your Enrolled status: `)
let height = ask.questionFloat(`insert your Height: `)
let className = ask.question(`insert your Class name: `)

console.log(`Full name: ${nameCompleted}, 
Age: ${age}, 
City: ${city}, 
Enrolled: ${enrolled}, 
Height: ${height}, 
Class name: ${className}`)