let signature = true
let age = 22

if ( signature && age >= 18) {
    console.log("Access granted: Signature active")
} else {
    console.log("Access denied: Unsigned")
}


// no primeiro foi usado && para verificar se a assinatura está ativa no maior de idade
// no segundo foi usado || para verificar se a assinatura está ativa com menor de idade
// no terceiro foi usado ! para verificar se a assinatura não está ativa com maior de idade