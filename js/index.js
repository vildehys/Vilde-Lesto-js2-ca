import { baseUrl } from "./data/api.js";
import { getExistingFavs } from "./utils/articles/favArticle.js"


const articlesContainer = document.querySelector(".container");

async function getArticles(baseUrl) {
  try {
    const response = await fetch(baseUrl);
    const articles = await response.json();
    

    articles.data.forEach(article =>{
        articlesContainer.innerHTML += 
        `
        <div class="article">
        <h2> ${article.attributes.title} </h2>
        <h5> ${article.attributes.author} </h5>
        <p> ${article.attributes.body} </p>
        <i class="far fa-heart" data-id="${article.id}" data-title="${article.attributes.title}" ></i>

        </div>`;
     });

     const favButtons = document.querySelectorAll(".article i");

     favButtons.forEach((button) => {
         button.addEventListener("click", handleClick);
     });

  } catch (err) {
      console.error(err);

  }


}

getArticles(baseUrl);

function handleClick() {
    //  console.log(event);
     this.classList.toggle("fa");
     this.classList.toggle("far");

     const id = this.dataset.id;
     const title = this.dataset.title;
     const author = this.dataset.author;
     const body = this.dataset.body;

     const currentFavs = getExistingFavs();

     const articleExists = currentFavs.find(function (fav) {
         return fav.id === id;

     });

     if (!articleExists) {
        const article = {id: id, title: title, author: author, body: body};

        currentFavs.push(article);
   
        saveFavs(currentFavs);
     }
     else {
         const newFavs = currentFavs.filter((fav) => fav.id !== id);
         saveFavs(newFavs);
     }
    }



    function saveFavs(favs) {
        localStorage.setItem("favourites", JSON.stringify(favs));
    }




 
 


 










