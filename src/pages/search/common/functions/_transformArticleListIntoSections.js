const transformArticleListIntoSections = articleList => {
  let sectionedList = {};

  if (articleList) {
    for (const article of articleList) {
      if (!sectionedList[article.sectionId]) {
        sectionedList[article.sectionId] = {
          name: article.sectionName,
          articles: []
        };
      }
      sectionedList[article.sectionId].articles.push(article);
    }
  }

  return sectionedList;
};

export default transformArticleListIntoSections;
