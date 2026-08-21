const ask = require(`readline-sync`)


 function calculator(num1, num2, operator){
    switch(operator) {
        case 1:
            return(num1 + num2)
            break
        case 2:
            return(num1 - num2)
            break
        case 3:
            return(num1 * num2)
            break
        case 4:
            return(num1 / num2)
            break
        case 5:
            return(num1 % num2)
            break                
    }
 }

