import './SingleCocktail.css';

function SingleCocktail({
  name,
  ingredients,
  instructions,
  id,
  img,
  addToFavorites,
  deleteFavorite,
}) {
  // let formattedIngredients = ingredients.map((ingredient) => {
  //   return <li>{ingredient}</li>;
  // });

  const newCocktail = {
    id, 
    name,
    ingredients,
    instructions, 
    img,
    deleteFavorite,
    isFavorite: true
  }

  return (
    <div className='single-cocktail' id={id}>
      <button onClick={() =>addToFavorites(newCocktail)}>Add to favorites</button>
      <p>Name: {name}</p>
      <ul className='ingredients-list'>Ingredients:{ingredients}</ul>
      <p>Instructions: {instructions}</p>
      <img className='img-container' src={img} alt={name}/>
    </div>
  );
}

export default SingleCocktail;
