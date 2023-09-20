import { useState } from 'react';
import './Search.css';
import { useNavigate } from 'react-router-dom';

function Search({ setCocktails, getCocktails }) {
  const [newCocktail, setNewCocktail] = useState('');

  const navigate = useNavigate();

  const searchForCocktail = (e) => {
    e.preventDefault();
    getCocktails(newCocktail).then((data) => {
      setCocktails(data.drinks);
      setNewCocktail('');
    });
    navigate('/')
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
