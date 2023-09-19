import SingleCocktail from '../SingleCocktail/SingleCocktail';
import './CocktailWrapper.css';

function CocktailWrapper({ cocktails, setFavorites, addToFavorites, deleteFavorite }) {
  console.log('HERE', cocktails[5])
  const cocktailComponents = cocktails.map((cocktail) => {
      return (
        <SingleCocktail
          name={cocktail.strDrink}
          ingredients={cocktail.ingredients}
          instructions={cocktail.strInstructions}
          id={cocktail.idDrink}
          addToFavorites={addToFavorites}
          deleteFavorite={deleteFavorite}
        />
      );
    });
  
  return <section className='cocktail-wrapper'> {cocktailComponents} </section>;
}
export default CocktailWrapper;
