import { getExistingFavs } from "../utils/articles/favArticle.js"

const favourites = getExistingFavs();

const articlesContainer = document.querySelector(".container");

favourites.forEach(favourite => {
    articlesContainer.innerHTML += `<div class="article">
    <h4>${favourite.title}</h4>
    <i clas="fa fa-heart"></i>
    </div>`
})
