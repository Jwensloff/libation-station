import './SingleCocktail.css'

function SingleCocktail ({name, ingredients, instructions}) {
  let formattedIngredients = ingredients.map(ingredient => {
    if(ingredient.includes('cl')){
      console.log('here')
    }
    return <li>{ingredient}</li>
  })

  return (
    <div className='single-cocktail'>
      <p>Name: {name}</p>
      <ul className='ingredients-list'>Ingredients: {formattedIngredients}</ul>
      <p>Instructions: {instructions}</p>
    </div>
  )
}

export default SingleCocktail

