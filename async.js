
const url = "https://noroff-feu-example.herokuapp.com/api/articles";
const articlesContainer = document.querySelector(".container");

async function getArticles(url) {
  try {
    const response = await fetch(url);
    const articles = await response.json();

    console.log(articles)

    articles.data.forEach(function(article) {
        articlesContainer.innerHTML += 
        `
        <div class="articles">
        
        <div class="cards">
        <h2> ${article.attributes.title} </h2>
        <h5> ${article.attributes.author} </h5>
        <p> ${article.attributes.body} </p>
        <button>click me</button>
        </div>

        </div>`;
     });
  } catch (err) {
      console.error(err);
  }

  
    
}

getArticles(url);