const getCocktails = (text) => {
  return fetch(`https://api.api-ninjas.com/v1/cocktail?name=${text}`, {
    method: 'GET',
    headers: {
      'X-Api-Key': 'ljkTFQKZ6s0tdyczZYN6EA==gKuh9QLkOr5zS3Rm',
    },
  })
    .then((resp) => {
      if (!resp.ok) {
        throw new Error('Error');
      }
     return resp.json()
    })
    .catch((error) => console.log(error));
};

export default getCocktails