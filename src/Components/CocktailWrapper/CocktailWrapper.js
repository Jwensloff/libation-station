import SingleCocktail from '../SingleCocktail/SingleCocktail';
import './CocktailWrapper.css';

function CocktailWrapper({ cocktails }) {

  const cocktailComponents = cocktails.map((cocktail) => {
    let id = Date.now()
      return (
        <SingleCocktail
          name={cocktail.name}
          ingredients={cocktail.ingredients}
          instructions={cocktail.instructions}
          id={id}
        />
      );
    });
  
  return <section> {cocktailComponents} </section>;
}
export default CocktailWrapper;
