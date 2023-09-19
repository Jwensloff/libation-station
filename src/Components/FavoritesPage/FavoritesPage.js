import { useEffect } from 'react';
import './FavoritesPage.css';
import SingleCocktail from '../SingleCocktail/SingleCocktail';

function FavoritesPage({ favorites }) {
  // console.log('from faves page',favorites)
  // useEffect
  const favorited = favorites.map((favorite) => {
    // console.log('favorites',favorite.name);
    <SingleCocktail
      name={favorite.name}
      //         ingredients={finalIngredients}
      //         instructions={cocktail.strInstructions}
      //         id={cocktail.idDrink}
      //         img={cocktail.strDrinkThumb}
      //         addToFavorites={addToFavorites}
      //         deleteFavorite={deleteFavorite}
      //         key={cocktail.idDrink}
    ></SingleCocktail>;
  });

  return <div>{favorited}</div>;
}

export default FavoritesPage;
