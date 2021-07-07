const categories = [
  "business",
  "entertainment",
  "general",
  "health",
  "science",
  "sports",
  "technology",
];

function renderCategoriesList() {
  const anchorTags = [];
  for (const category of categories) {
    anchorTags.push(
      `<a class="category-item" href="http://127.0.0.1:5500/week3/d3/cds-w3-d3-codernews/index.html?category=${category}">${category}</a>`,
    );
  }
  document.getElementById("categories").innerHTML = anchorTags.join("");
}
  
renderCategoriesList();
  