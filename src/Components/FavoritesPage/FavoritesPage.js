import './FavoritesPage.css';
import SingleCocktail from '../SingleCocktail/SingleCocktail';
import { useEffect } from 'react';

function FavoritesPage({
  favorites,
  deleteFavorite,
  setIsFavorite,
  isFavorite,
}) {
  useEffect(()=> {
    setIsFavorite(true);
  },[]) 
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
        isFavorite={isFavorite}
      />
    );
  });

  return (
    <div className='favorited-grid'>
      {favorites.length === 0 ? (
        <div>You don't have any favorites yet</div>
      ) : (
        <div>{favorited}</div>
      )}
    </div>
  );
}

export default FavoritesPage;
