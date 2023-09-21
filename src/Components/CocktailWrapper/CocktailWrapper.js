import { useEffect } from 'react';
import SingleCocktail from '../SingleCocktail/SingleCocktail';
import './CocktailWrapper.css';

function CocktailWrapper({
  cocktails,
  addToFavorites,
  deleteFavorite,
  favorites,
}) {
  if (!cocktails) {
    console.log('hello world');
    return (
      <div className='mesage-container container'>
        <div className='outter-border container'>
          <div className='inner-border container'>
            <div className='error-message container'>
              <p>Appologies, we recognize that cocktail</p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const cocktailComponents = cocktails.map((cocktail) => {
      const keys = Object.keys(cocktail);
      const ingredients = [];
      const measurements = [];
      let finalIngredients = [];

      keys.map((key) => {
        if (key.includes('Ingredient') && cocktail[key]) {
          ingredients.push(cocktail[key]);
        }
        if (key.includes('strMeasure') && cocktail[key]) {
          measurements.push(cocktail[key]);
        }
        measurements.map((measurement, index) => {
          let ing = `${measurement} ${ingredients[index]}`;
          if (!finalIngredients.includes(ing)) {
            finalIngredients.push(ing);
          }
        });
        return finalIngredients;
      });

      return (
        <SingleCocktail
          name={cocktail.strDrink}
          ingredients={finalIngredients}
          instructions={cocktail.strInstructions}
          id={cocktail.idDrink}
          img={cocktail.strDrinkThumb}
          addToFavorites={addToFavorites}
          deleteFavorite={deleteFavorite}
          key={cocktail.idDrink}
          favorites={favorites}
        />
      );
    });

    return (
      <section className='cocktail-wrapper'> {cocktailComponents} </section>
    );
  }
}
export default CocktailWrapper;
