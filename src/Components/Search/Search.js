import { useState } from 'react';
import './Search.css';

function Search({ setCocktails, getCocktails }) {
  const [newCocktail, setNewCocktail] = useState('');

  const searchForCocktail = (e) => {
    e.preventDefault();
    getCocktails(newCocktail).then((data) => {
      setCocktails(data.drinks);
      setNewCocktail('');
    });
  };

  return (
    <form>
      <input
        type='text'
        placeholder='Search recipes here'
        value={newCocktail}
        onChange={(e) => setNewCocktail(e.target.value)}
      />
      <button onClick={(e) => searchForCocktail(e)}>Search</button>
    </form>
  );
}

export default Search;
