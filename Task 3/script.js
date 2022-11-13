/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';



function fetchData() {
    document.getElementById("message").style.display = "none";
    document.getElementById("btn").addEventListener("click", fetchData);
  
    const divEl = document.querySelector("#output");
  

    
    fetch(ENDPOINT)
      .then((response) => response.json())
      .then((data) => {
        data.forEach((post) => {
          divEl.insertAdjacentHTML(
            "beforeend",
            `<div id="output">Login: ${post.login}✔ <br>
          Avatar :🔗 ${post.avatar_url}🔗 </div> `
          );
        });
      });
  }