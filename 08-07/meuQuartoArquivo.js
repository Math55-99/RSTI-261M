let strongestCharacter = "Miyabi"
switch (strongestCharacter) {
    case "Yixuan":
        console.log("Yixuan is the strongest character!");
        break;
    case "Miyabi":
        console.log("Miyabi is the strongest character!");
        break;
    case "Vivian":
        console.log("Vivian is the strongest character!");
        break;
    case "Zane doe":
        console.log("Zane doe is the strongest character!");
        break;
    default:
        console.log("Unknown character.");
        break;
}

const ask = require("readline-sync")
let starterPokemon = ask.question("Insert your pokemon: ")
switch (starterPokemon) {
    case "Bulbasaur":
        console.log("Bulbasaur is a Grass/Poison type Pokémon");
        break;
    case "Charmander":
        console.log("Charmander is a Fire type Pokémon");
        break;
    case "Squirtle":
        console.log("Squirtle is a Water type Pokémon");
        break;
    default:
        console.log("Unknown Pokémon");
        break;
}





let highSchoolConcluded = true;
let age = 20;
let studyingAtAnotherCollege = false;
let youCanStudyAtCollege = highSchoolConcluded && age >= 18 || studyingAtAnotherCollege;

switch (youCanStudyAtCollege) {
    case true:
        console.log("You can study at college");
        break;
    case false:
        console.log("You cannot study at college");
        break;
}