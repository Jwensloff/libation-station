import './SingleCocktail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
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
  const [expand, setExpand] = useState(false);

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

  const toggleInfo = () => {
    const newState = expand ? false : true;
    setExpand(newState);
  };

  return (
    // <div className='mesage-container card'>
    <div className='outter-card-border card'>
      <div className='middle-card-border card'>
        <div className='inner-card-border card'>
          <div className='single-cocktail' id={id} key={id}>
            <img className='img-container' src={img} alt={name} />
            <div className='info-container'>
              {checkIsFavorite(id) ? (
                <button
                  className='favorite-btn'
                  onClick={() => deleteFavorite(id)}
                >
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
              <button onClick={() => toggleInfo()}>Toggle</button>
              {expand && (
                <>
                  <ul className='ingredients-list'>
                    <span className='span'>Ingredients:</span>{' '}
                    {formattedIngredients}
                  </ul>
                  <p>
                    <span className='span'>Instructions:</span> {instructions}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default SingleCocktail;
