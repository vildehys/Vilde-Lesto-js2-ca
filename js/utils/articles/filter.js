import createHtml from "../createHtml.js";
export function filterArticles(articles) {
    const filter = document.querySelector("#filter");
    filter.onkeyup = function (event) {
      const filterValue = event.target.value.trim().toLowerCase();
      console.log(filterValue)
  
      const filteredList = {
        data: articles.filter((article) => {
          
          let val = article.attributes;
        if (val.title.toLowerCase().includes(filterValue)) {
            console.log(article.attributes.title)
          return true;
        }
      })
    };

      createHtml(filteredList);
    };
  }
  