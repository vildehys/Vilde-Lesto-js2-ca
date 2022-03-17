import { getExistingFavs } from "./utils/articles/favArticle.js";

const favourites = getExistingFavs();

const articlesContainer = document.querySelector(".container");

if(favourites.length === 0) {
    articlesContainer.innerHTML = "You don't have any favourites yet";
}

favourites.forEach(favourite => {
    articlesContainer.innerHTML += `<div class="article">
    <h1>${favourite.title}</h1>
    <h2>${favourite.id}</h2>
    <h2>${favourite.author}</h2>
    <h2>${favourite.body}</h2>
    <i clas="fa fa-heart"></i>
    </div>`
})
