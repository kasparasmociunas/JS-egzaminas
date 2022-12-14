/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
function result() {
    let search = document.querySelector("#search");
    let pounds = document.querySelector("#pounds");
    let grams = document.querySelector("#grams");
    let ounces = document.querySelector("#ounces");
    pounds.innerHTML = "Svarais (lb) : " + (search.value * 2.2046).toFixed(4);
    grams.innerHTML = "Gramais (g) : " + (search.value * 0.001).toFixed(4);
    ounces.innerHTML = "Uncijomis (oz) : " + (search.value * 35.274).toFixed(4);
  }