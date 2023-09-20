import { useEffect } from 'react';
import './FavoritesPage.css';
import SingleCocktail from '../SingleCocktail/SingleCocktail';

function FavoritesPage({ favorites, deleteFavorite, setIsFavorite, isFavorite }) {
  console.log('from faves page', favorites);
  const favorited = favorites.map((cocktail) => {
    // console.log('favorites', cocktail.name);
    setIsFavorite(true)
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
      <div>{favorited}</div>
    </div>
  );
}

export default FavoritesPage;
