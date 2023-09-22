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
  favorites,
}) {
  let formattedIngredients = ingredients.map((ingredient) => {
    return <li key={ingredient}>{ingredient}</li>;
  });

  const newCocktail = {
    id,
    name,
    ingredients,
    instructions,
    img,
  };

  const checkIsFavorite = (id) => {
    const isFave = favorites.find((favorite) => favorite.id === id);
    if (isFave) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className='single-cocktail' id={id} key={id}>
      <img className='img-container' src={img} alt={name} />
      <div className='info-container'>
        {checkIsFavorite(id) ? (
          <button className='favorite-btn' onClick={() => deleteFavorite(id)}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        ) : (
          <button
            className='favorite-btn'
            onClick={() => addToFavorites(newCocktail)}
          >
            <FontAwesomeIcon icon={faStar} />
          </button>
        )}
        <h2 className='name'>{name}</h2>
        <ul className='ingredients-list'>Ingredients: {formattedIngredients}</ul>
      <p>Instructions: {instructions}</p>
      </div>
    </div>
  );
}

export default SingleCocktail;
