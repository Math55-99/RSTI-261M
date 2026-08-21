const ask = require(`readline-sync`)

function verifyAge(age){
    return age >= 18
}


let userAge = Number (ask.question(`Enter your age: `))

if (verifyAge(userAge)) {
    console.log(`Maior de idade`)
} else {
    console.log(`Menor de idade`)
}

