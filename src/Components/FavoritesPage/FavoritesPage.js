import { useEffect } from 'react';
import './FavoritesPage.css';
import SingleCocktail from '../SingleCocktail/SingleCocktail';

function FavoritesPage({ favorites }) {
  console.log('from faves page',favorites)
  // useEffect
  const favorited = favorites.map((cocktail) => {
    console.log('favorites', cocktail.name);
    return <SingleCocktail 
    name={cocktail.name} 
    id={cocktail.id} 
    ingredients={cocktail.ingredients}
    instructions={cocktail.instructions}
    img={cocktail.img}
    key={cocktail.id} />
  });

  return (
    <div className='favorited-grid'>
      <div>HELLOOOOOO</div>
      <div>{favorited}</div>
    </div>
  );
}

export default FavoritesPage;
