

const ask = require(`readline-sync`)



function checkForEvenOrOdd(number){
    if (number % 2 === 0) {
        return `Par`
    }
        return `Impar`
    }

let number = Number (ask.question(`Enter your number: `))

checkForEvenOrOdd(number)

