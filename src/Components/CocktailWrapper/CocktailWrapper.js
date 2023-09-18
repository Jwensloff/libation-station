import SingleCocktail from '../SingleCocktail/SingleCocktail';
import './CocktailWrapper.css';

function CocktailWrapper({ cocktails, setFavorites, addToFavorites, deleteFavorite }) {

  const cocktailComponents = cocktails.map((cocktail) => {
    let id = Date.now()
      return (
        <SingleCocktail
          name={cocktail.name}
          ingredients={cocktail.ingredients}
          instructions={cocktail.instructions}
          id={id}
          addToFavorites={addToFavorites}
          deleteFavorite={deleteFavorite}
        />
      );
    });
  
  return <section className='cocktail-wrapper'> {cocktailComponents} </section>;
}
export default CocktailWrapper;
