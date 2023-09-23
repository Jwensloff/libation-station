import { useState } from 'react';
import './Search.css';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';


function Search({ setCocktails, getCocktails, setError }) {
  const [newCocktail, setNewCocktail] = useState('');

  const navigate = useNavigate();
  const regex = /^[a-zA-Z\s-]*$/;

  const searchForCocktail = (e) => {
    e.preventDefault();
    navigate('/');
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
        .catch(() => {
          setError({ error: true, message: '404, Page not found' });
        });
    }
  };

  return (
    <form className='form'>
      <input
        className='input'
        type='text'
        name='input'
        placeholder='Search cocktails'
        value={newCocktail}
        onChange={(e) => setNewCocktail(e.target.value)}
      />
      <button className='input-btn' onClick={(e) => searchForCocktail(e)}>
        Search
      </button>
    </form>
  );
}

Search.propTypes = {
  setCocktails: PropTypes.func.isRequired,
  getCocktails: PropTypes.func.isRequired, 
  setError: PropTypes.func.isRequired,
}
export default Search;
