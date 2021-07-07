const newsapi_url = "https://newsapi.org/v2/top-headlines?apiKey=aadd735eb7d24d8fb361c65d6db92d50";

function rendersArticles(articles) {
  const spam = articles.map(
    (a) => `
    <section>
      <h1>${a.title}</h1>
      <img src="${a.urlToImage}" alt="no img"/>
      <div class="attributes">
        Author: ${a.author ? a.author : "Unknown"} 
      </div>
      <div class="attributes">
        Source: ${a.source.name} 
      </div>
      <div class="attributes">
        Date: ${a.publishedAt} 
      </div>
      <div class="attributes">Content:</div>
      <div>
      ${a.content}
      </div>
    </section>
  `,
  );

  document.getElementById("articles").innerHTML = spam.join("");
}

function produceUrl(url) {
  const urlParams = window.location.search.split("?")[1];
  if (!urlParams) return url + "&language=en";

  urlParams.split("&").map((p) => {
    const [key, value] = p.split("=");
    url += `&${key}=${value}`;
  });

  console.log({ finalUrl: url });

  return url
}

async function fetchArticles() {
  let url = produceUrl(newsapi_url);
  let articles = [];

  try {
    const resp = await fetch(url);
    const json = await resp.json();


    articles = json.articles;
    console.log(articles)

    localStorage.setItem("willNotWork", articles);
    localStorage.setItem("willWork", JSON.stringify(articles));
  } catch (error) {
    articles = JSON.parse(localStorage.getItem("willWork"));
  } finally {
    rendersArticles(articles);
  }
}

fetchArticles();