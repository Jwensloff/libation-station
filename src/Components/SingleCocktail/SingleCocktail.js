import './SingleCocktail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faXmark } from '@fortawesome/free-solid-svg-icons';
<FontAwesomeIcon icon={faXmark} />;
function SingleCocktail({
  name,
  ingredients,
  instructions,
  id,
  img,
  addToFavorites,
  deleteFavorite,
  isFavorite
}) {

  let formattedIngredients = ingredients.map((ingredient) => {
    return <li>{ingredient}</li>;
  });

  const newCocktail = {
    id,
    name,
    ingredients,
    instructions,
    img,
  }
  console.log('isfavorie?',isFavorite)


  // If cocktail is in local storage (favorites )
  // --> id favorite is true and render the remove favorite button 

  
  return (
    <div className='single-cocktail' id={id}>
      {!isFavorite ? (
        <button onClick={() => addToFavorites(newCocktail)}>
          <FontAwesomeIcon icon={faStar} />
        </button>
       ) : (
        <button onClick={() => deleteFavorite(id)}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      )} 
      <p>Name: {name}</p>
      <ul className='ingredients-list'>Ingredients:{formattedIngredients}</ul>
      <p>Instructions: {instructions}</p>
      <img className='img-container' src={img} alt={name} />
    </div>
  );
}

export default SingleCocktail;
