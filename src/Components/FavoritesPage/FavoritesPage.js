import './FavoritesPage.css';
import SingleCocktail from '../SingleCocktail/SingleCocktail';
import { useEffect } from 'react';

function FavoritesPage({ favorites, deleteFavorite, setError }) {
  useEffect(() => {
    setError({ error: false, message: '' });
  }, [favorites]);

  const favorited = favorites.map((cocktail) => {
    return (
      <SingleCocktail
        name={cocktail.name}
        id={cocktail.id}
        ingredients={cocktail.ingredients}
        instructions={cocktail.instructions}
        img={cocktail.img}
        key={cocktail.id}
        deleteFavorite={deleteFavorite}
        favorites={favorites}
      />
    );
  });

  return (
    <>
      {favorites.length === 0 ? (
        <div className='mesage-container container'>
          <div className='outter-border container'>
            <div className='inner-border container'>
              <div className='error-message container'>
                <p>You don't have any favorites yet</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='favorited-view'>
          <div className='fave-cocktail-wrapper'>{favorited}</div>
        </div>
      )}
    </>
  );
}

export default FavoritesPage;
