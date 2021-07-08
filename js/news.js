const api_key = "aadd735eb7d24d8fb361c65d6db92d50";
let articles = [];
let allArticles = [];
let pageNumber = 0;

document.getElementById("searchButton").addEventListener('click', (e) => {
  e.preventDefault();
})

function rendersArticles(articles) {
  const article = articles.map(
    (a, num) => `
    <div class="card mb-3">
      <img src="${a.urlToImage}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${num+1}. ${a.title}</h5>
        <p class="card-text">Author: ${a.author ? a.author : "Unknown"} &nbsp;&nbsp; | &nbsp;&nbsp; Source: ${a.source.name} </p>
        <p class="card-text">${a.content}</p>
        <p class="card-text"><small class="text-muted">Date: ${a.publishedAt}</small></p>
      </div>
    </div>
  `,
  );

  document.getElementById("articles").innerHTML = article.join("");
}

function produceUrl() {
  pageNumber++;
  let url = `https://newsapi.org/v2/top-headlines?apiKey=${api_key}&page=${pageNumber}`

  const urlParams = window.location.search.split("?")[1];
  if (!urlParams) return url + "&language=en";

  urlParams.split("&").map((p) => {
    const [key, value] = p.split("=");
    url += `&${key}=${value}`; // query parameters
  });

  return url
}

function searchUrl(q) {
  return `https://newsapi.org/v2/top-headlines?q=${q}&apiKey=${api_key}`;
}

async function fetchArticles(q) {
  let url = q ? searchUrl(q) : produceUrl();
  console.log(url);

  try {
    const resp = await fetch(url);
    const json = await resp.json();

    articles = json.articles;
    
    allArticles = allArticles.concat(articles);
    console.log(allArticles)
  } catch (error) {
    articles = JSON.parse(localStorage.getItem("willWork"));
  } finally {
    rendersArticles(articles);
  }
}

fetchArticles();

function searchNews() {
  let q = document.getElementById("searchTerm").value;
  fetchArticles(q);
}

function triggerFetchArticles() {
  fetchArticles();
}

