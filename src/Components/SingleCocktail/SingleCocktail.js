import './SingleCocktail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBookmark,
  faXmark,
  faAngleUp,
  faAngleDown,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import PropTypes from 'prop-types';

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
    setExpand(!expand);
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
                  className='favorite-btn btn'
                  onClick={() => deleteFavorite(id)}
                >
                  <FontAwesomeIcon icon={faXmark} size='2x' style={{ color: '#f6dcac' }}/>
                </button>
              ) : (
                <button
                  className='favorite-btn btn'
                  onClick={() => addToFavorites(newCocktail)}
                >
                  <FontAwesomeIcon icon={faBookmark} size='2x' style={{ color: '#f6dcac'}}/>
                </button>
              )}
              <div className='name-button-wrapper'>
                <h2 className='name'>{name}</h2>
                <button className='btn drop-down' onClick={() => toggleInfo()}>
                  {expand ? (
                    <FontAwesomeIcon icon={faAngleUp} size='2x'/>
                  ) : (
                    <FontAwesomeIcon icon={faAngleDown} size='2x'/>
                  )}
                </button>
              </div>
              {expand && (
                <div className='show-info'>
                  <ul className='ingredients-list'>
                    <span className='span'>Ingredients:</span>{' '}
                    {formattedIngredients}
                  </ul>
                  <p>
                    <span className='span'>Instructions:</span> {instructions}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

SingleCocktail.propTypes = {
  name: PropTypes.string,
  ingredients: PropTypes.array,
  instructions: PropTypes.string,
  id: PropTypes.string,
  img: PropTypes.string,
  addToFavorites: PropTypes.func.isRequired,
  deleteFavorite: PropTypes.func.isRequired,
  favorites: PropTypes.array,
}
export default SingleCocktail;
