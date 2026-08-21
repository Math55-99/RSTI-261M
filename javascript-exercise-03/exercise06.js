const ask = require(`readline-sync`)


function typeOfTriangle(side1, side2, side3){
    if (side1 === side2 === side3) {
        console.log(`Equilátero`)
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
        console.log(`Isóceles`)
    } else if (side1 !== side2 !== side3) {
        console.log(`Escaleno`)
    }
}

