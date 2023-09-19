const getCocktails = (text) => {
  return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${text}&api_key='1'`)
  
    .then(response => {
      console.log(response);
      if (!response.ok) {
        throw new Error(response.statusText); 
      }
      return response.json()
    }).catch(error => console.log(error))
    ;
}

export default getCocktails