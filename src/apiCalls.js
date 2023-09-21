const getCocktails = (text) => {
  return fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${text}&api_key='1'`
  )
    .then((response) => {
      if (response.status === 404) {
        throw new Error('404');
      }
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
};

export default getCocktails;
