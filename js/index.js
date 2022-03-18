import { baseUrl } from "./data/api.js";
import { getExistingFavs } from "./utils/articles/favArticle.js"
import { filterArticles } from "./utils/articles/filter.js";
import createHtml from "./utils/createHtml.js";

(async function () {
    try {
        const response = await fetch(baseUrl);
        const result = await response.json();
        const articleList = result;
        //console.log(articleList.data);

        createHtml(articleList);
        filterArticles(articleList.data);
    } catch (err) {
        console.error(err);
    }
})();

export function handleClick() {
    //  console.log(event);
    this.classList.toggle("fa");
    this.classList.toggle("far");

    const id = this.dataset.id;
    const title = this.dataset.title;
    const author = this.dataset.author;
    const body = this.dataset.body;

    //Checks if article exists already
    const currentFavs = getExistingFavs();
    const articleExists = currentFavs.find(function (fav) {
        return fav.id === id;
    });
    
    // Adds article if not already existing
    if (!articleExists) {
        const article = { id: id, title: title, author: author, body: body };
        currentFavs.push(article);
        saveFavs(currentFavs);
    }
    else {
        const newFavs = currentFavs.filter((fav) => fav.id !== id);
        saveFavs(newFavs);
    }

    function saveFavs(favs) {
        localStorage.setItem("favourites", JSON.stringify(favs));
    }
}