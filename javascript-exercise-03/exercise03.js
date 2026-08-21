const ask = require(`readline-sync`)

function verifyNote(note) {
    if (note >= 9) {
        return `Excelente`
    } else if (note >= 7) {
        return `Good`
    } else if (note >= 5) {
        return `Regular`
    } else {
        return `Failed`
    }
}

let note = Number (ask.question(`Enter the Note: `))

console.log(verifyNote(note))

 