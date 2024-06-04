import { drinkComponent } from "../components/menuComponents.js";

let renderArea = document.querySelector("#drink-area");
const BASE_DATA = "../data/drinks.json";

fetch(BASE_DATA).then((respone) => {
    return respone.json();
})
.then((data) => {
    data.result.forEach((drink) => {
        renderArea.innerHTML += drinkComponent(drink);
    })
})