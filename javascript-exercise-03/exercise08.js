const ask = require(`readline-sync`)



function calculateDiscount (amount, unitprice) {
    if (amount >= 10) {
        return unitprice * 0,2
    } else if (amount >= 5 || amount <= 9) {
        return unitprice * 0,1
    } else {
        return unitprice 
    }
}



let unitprice = Number (ask.question(`Enter the product price: `))

let amount = Number(ask.question(`Enter the product quantity: `))

calculateDiscount(amount, unitprice)