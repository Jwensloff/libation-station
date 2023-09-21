import { useState } from 'react';
import './Search.css';
import { useNavigate } from 'react-router-dom';

function Search({ setCocktails, getCocktails, error, setError }) {
  const [newCocktail, setNewCocktail] = useState('');

  const navigate = useNavigate();
  const regex = /^[a-zA-Z\s-]*$/;

  const searchForCocktail = (e) => {
    e.preventDefault();
    setError({ error: false, message: '' });
    setCocktails([]);
    if (!newCocktail.match(regex)) {
      setError({ error: true, message: 'Please enter a valid cocktail' });
      setNewCocktail('');
      return;
    } else {
      let trimmedInput = newCocktail.trim();
      getCocktails(trimmedInput)
        .then((data) => {
          setCocktails(data.drinks);
          setNewCocktail('');
        })
        .catch((error) => {
          console.log(error);
          setError({ error: true, message: '404, Page not found' });
        });
      navigate('/');
    }
  };

  return (
    <form className='form'>
      <input
        className='input'
        type='text'
        placeholder='Search cocktails here'
        value={newCocktail}
        onChange={(e) => setNewCocktail(e.target.value)}
      />
      <button className='input-btn' onClick={(e) => searchForCocktail(e)}>
        Search
      </button>
    </form>
  );
}

export default Search;
