import { handleClick } from "../index.js";
import { getExistingFavs } from "./articles/favArticle.js";

export default function createHtml(articleList) {
    const articlesContainer = document.querySelector(".container");

    articlesContainer.innerHTML = "";

    const favourites = getExistingFavs();

    articleList.data.forEach((article) => {
        let cssClass = "far";
        
        // Checks if article already exists in fav
        const doesArticleExist = favourites.find(function (fav) {
            
            return parseInt(fav.id) === article.id
        })
        // If already existing, change i layout
        if (doesArticleExist) {
            cssClass = "fa";
        }
        articlesContainer.innerHTML += `
        <div class="article">
            <div class="article-content">
                <h2> ${article.attributes.title} </h2>
                <h5> ${article.attributes.author} </h5>
                <p> ${article.attributes.body} </p>
                <i class="${cssClass} fa-heart" data-id="${article.id}" data-title="${article.attributes.title}" data-author="${article.attributes.author}" data-body="${article.attributes.body}" ></i>
            </div>
        </div>`;
    });
    const favButtons = document.querySelectorAll(".article i");
    favButtons.forEach(function(button)  {
        button.addEventListener("click", handleClick);
    });
}

