import { getExistingFavs } from "./utils/articles/favArticle.js";
import { clearStorage } from "./utils/articles/favArticle.js";

const favourites = getExistingFavs();

const articlesContainer = document.querySelector(".container");

if (favourites && favourites.length >= 1) {
  favourites.forEach(favourite => {
    articlesContainer.innerHTML += `
    <div class="article">
    <div class="article-content">
    <h2>${favourite.title}</h2>
    <h5>${favourite.author}</h5>
    <p>${favourite.body}</p>
    <i clas="fa fa-heart"></i>
    </div>
    </div>`
});
} else {
  articlesContainer.innerHTML = "<h6>You have no favorites yet.</h6>";
}

const button = document.querySelector("#clear");
button.addEventListener("click", clearButton);

function clearButton() {
  clearStorage("favorites");
  articlesContainer.innerHTML = "<h6>You have no favorites yet.</h6>";
}