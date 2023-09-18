import './SingleCocktail.css';

function SingleCocktail({
  name,
  ingredients,
  instructions,
  addToFavorites,
  id,
}) {
  let formattedIngredients = ingredients.map((ingredient) => {
    return <li>{ingredient}</li>;
  });

  const newCocktail = {
    id, 
    name,
    ingredients,
    instructions
  }
  
  return (
    <div className='single-cocktail' id={id}>
      <button onClick={() =>addToFavorites(newCocktail)}>Add to favorites</button>
      <p>Name: {name}</p>
      <ul className='ingredients-list'>Ingredients: {formattedIngredients}</ul>
      <p>Instructions: {instructions}</p>
    </div>
  );
}

export default SingleCocktail;
