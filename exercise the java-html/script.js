
//exercise-01

//const title = document.querySelector("#title");
//onst text = document.querySelector("#text");
//const button = document.querySelector("#button");

//console.log(`
//title
//text
//button`);

//exercise-02

//const title2 = document.querySelector("#title2");
//const text2 = document.querySelector("#text2");
//const button2 = document.querySelector("#button2");

//console.log(title2.textContent);
//console.log(text2.textContent);
//console.log(button2.textContent);

//title2.textContent = "holowficacao";
//text2.textContent = "vasto lord";
//button2.textContent = "transformar";

//exercise-03

//const nome = document.querySelector("#name");
//const age = document.querySelector("#age");
//const city = document.querySelector("#city");

//console.log(nome.textContent);
//console.log(age.textContent);
//console.log(city.textContent);

//nome.textContent = "Ichigo";
//age.textContent = "19";
//city.textContent = "Karakura";

//exercise-04

//const title = document.querySelector("#title");
//const text = document.querySelector("#text");
//const button = document.querySelector("#button");
//const image = document.querySelector("#image");

//console.log(image.getAttribute("src"));
//console.log(`
//title
// text
//button
//image`);

// button.addEventListener("click", function() {
// image.setAttribute("src", "imagem - 02.jpg")
// image.setAttribute("alt", "Ichigo Bankai")
//    });

//exercise-05

// const image = document.querySelector("#image");

// console.log(`
// image
// alt`);
// console.log(image.getAttribute("image", "alt"));

// image.setAttribute("src", "imagem - 04.jpg");
// image.setAttribute("alt", "Ichigo Vasto Lorde")

//exercise-06

//const zanpakuto = document.querySelector("#zanpakuto");
//const bankai = document.querySelector("#bankai");

//bankai.addEventListener("click", function() {
//zanpakuto.textContent = "Tensa Zangetsu";
//})

//exercise-07

//const transform = document.querySelector("#transform");
//const bankai = document.querySelector("#bankai");
//const hollow = document.querySelector("#hollow");
//const lorde = document.querySelector("#vastolorde");

//bankai.addEventListener("click", function () {
    //transform.textContent = "Tensa Zangetsu"
//});

//hollow.addEventListener("click", function () {
    //transform.textContent = "AA Bora Lutar"
//});

//lorde.addEventListener("click", function () {
   // transform.textContent = "Graaaaaaa"
//});

//exercise-08

//const bankai = document.querySelector("#Shigai");
//const low = document.querySelector("#lowspiritual");
//const high = document.querySelector("#Highspiritual");

//low.addEventListener("click", function() {
   // bankai.textContent = Number(bankai.textContent) -1

    //if(Number(bankai.textContent) <= -10) {
       // bankai.textContent = "Shigai"
    //}
//})

//high.addEventListener("click", function() {
   // bankai.textContent = Number(bankai.textContent) +1

   // if(Number(bankai.textContent) >= 10) {
       // bankai.textContent = "Bankai"
  //  }
//})

//exercise-09

//const life = document.querySelector(".square");
//const img = document.querySelector("#imagem")

//life.addEventListener("mouseenter", function() {
    //img.setAttribute("src", "imagem - 06.jpg")
//})

//life.addEventListener("mouseleave", function() {
    //img.setAttribute("src", "imagem - 05.jpg")
//})

//exercise-10

const enter = document.querySelector("#field");
const result = document.querySelector("#result");

enter.addEventListener("input", function() {
    result.textContent = this.value
})


