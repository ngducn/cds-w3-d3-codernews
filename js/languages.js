const languages = [
    "de",
    "es",
    "he",
    "it",
    "nl",
    "no",
    "pt",
    "ru",
    "se",
    "ud",
    "zh",
    "ar",
    "en",
    "jp",
    "fr",
    "rs",
    "cn",
    "gb",
    "kr",
  ];
  
  function renderLanguageList() {
    const anchorTags = []
    for (const language of languages) {
      anchorTags.push(
        `<a class="ml-1" href="http://127.0.0.1:5500/week3/d3/cds-w3-d3-codernews/index.html?language=${language}">${language}</a>`,
      );
    }
    document.getElementById("languages").innerHTML = anchorTags.join(", ");
    
  }
  
  
  renderLanguageList()