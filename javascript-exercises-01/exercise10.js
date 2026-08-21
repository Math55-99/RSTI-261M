let customer = "Platinum"
let value = 850
console.log(value.toLocaleString("pt-BR", { style: "currency", currency: "BRL"}))

switch (customer) {
  case "Bronze":
    console.log(`5% discount - ${(value * 0.05).toLocaleString("pt-BR", { style: "currency", currency: "BRL"})} - final value: ${(value - (value * 0.05)).toLocaleString("pt-BR", { style: "currency", currency: "BRL"})}`);
    break;
  case "Silver":
    console.log(`10% discount - ${(value* 0.1).toLocaleString("pt-BR", { style: "currency", currency: "BRL"})} - final value: ${(value - (value * 0.1)).toLocaleString("pt-BR", { style: "currency", currency: "BRL"})}`);
    break;
  case "Gold":
    console.log(`15% discount - ${(value * 0.15).toLocaleString("pt-BR", { style: "currency", currency: "BRL"})} - final value: ${(value - (value * 0.15)).toLocaleString("pt-BR", { style: "currency", currency: "BRL"})}`);
    break;
  case "Platinum":
    console.log(`20% discount - ${(value * 0.2).toLocaleString("pt-BR", { style: "currency", currency: "BRL"})} - final value: ${(value - (value * 0.2)).toLocaleString("pt-BR", { style: "currency", currency: "BRL"})}`);
    break;
  default:
    console.log(`Invalid category`);
}