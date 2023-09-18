import './SingleCocktail.css'

function SingleCocktail ({name, ingredients, instructions}) {
  let formattedIngredients = ingredients.join(' ')
  return (
    <div>
      <p>{name}</p>
      <p>Ingredients: {formattedIngredients}</p>
      <p>Instructions: {instructions}</p>
    </div>
  )
}

export default SingleCocktail

