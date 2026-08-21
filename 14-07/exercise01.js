
const ask = require(`readline-sync`)



function qualified(age, qualification){
    return age >= 18 && qualification
}

let age = Number(ask.question(`Insert your age here: `))
let qualification = ask.question(`Do you have qualification? Y/N: `)


if(qualification === `Y`){
    qualification = true
} else {
    qualification = false
}


if (qualified) {
    console.log(`You can drive`)
} else {
    console.log(`You cannot drive`)
}





