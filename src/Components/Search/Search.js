import { useState, useEffect } from 'react';
import './Search.css';
import { useNavigate, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

function Search({ setCocktails, getCocktails, setError }) {
  const [newCocktail, setNewCocktail] = useState('');
  const [userMsg, setUserMsg] = useState('');
  let alcohol = useParams().alcohol;
  const navigate = useNavigate();
  const regex = /^[a-zA-Z\s-]*$/;
useEffect(()=>{
  setError({ error: false, message: '' });
}, [])

  const searchForCocktail = (e) => {
    setUserMsg('')
    e.preventDefault();
    setError({ error: false, message: '' });
    setCocktails([]);
    if (!newCocktail.match(regex)) {
      setUserMsg('Please enter a valid cocktail');
      setNewCocktail('');
      return;
    } else {
      let trimmedInput = newCocktail.trim();
      alcohol = trimmedInput;
      navigate(`/libation-station/search/${alcohol}`);
      getCocktails(alcohol)
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
    <div className='mesage-container container'>
      <div className='outter-border container'>
        <div className='inner-border container'>
          <div className='error-message container'>
            {userMsg && <p className='user-message'>{userMsg}</p>}
            <form className='form'>
              <input
                className='input'
                type='text'
                name='input'
                placeholder='Search cocktails here'
                value={newCocktail}
                onChange={(e) => setNewCocktail(e.target.value)}
              />
              <button
                className='input-btn'
                onClick={(e) => searchForCocktail(e)}
              >
                Search
              </button>
            </form>{' '}
          </div>
        </div>
      </div>
    </div>
  );
}

Search.propTypes = {
  setCocktails: PropTypes.func.isRequired,
  getCocktails: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
};

export default Search;
