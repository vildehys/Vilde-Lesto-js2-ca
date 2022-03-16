import { baseUrl } from "./data/api.js";

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
        <i class="far fa-heart" data-id="${article.id}" data-title="${article.attributes.title}"></i>

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

     const currentFavs = getExistingFavs();
     console.log(currentFavs);


 }

 function getExistingFavs() {
     const favs = localStorage.getItem("favourites");

     if (!favs) {
         return []
     } else {
         return favs;
     }
    }
 
 


 










