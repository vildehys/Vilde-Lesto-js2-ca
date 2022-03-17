import { getExistingFavs } from "./utils/articles/favArticle.js";

const favourites = getExistingFavs();

const articlesContainer = document.querySelector(".container");

if(favourites.length === 0) {
    articlesContainer.innerHTML = "You don't have any favourites yet";
}

favourites.forEach(favourite => {
    articlesContainer.innerHTML += `<div class="article">
    <div class="article-content">
    <h2>${favourite.title}</h2>
    <h5>${favourite.author}</h5>
    <p>${favourite.body}</p>
    <i clas="fa fa-heart"></i>
    </div>
    </div>`
})
