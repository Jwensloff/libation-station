import NavBar from '../NavBar/NavBar';
import './App.css';
import getCocktails from '../../apiCalls';
import { useEffect, useState } from 'react';
import CocktailWrapper from '../CocktailWrapper/CocktailWrapper';
import { Route, Routes } from 'react-router-dom';
import FavoritesPage from '../FavoritesPage/FavoritesPage';
import Error from '../Error/Error';

function App() {
  const [cocktails, setCocktails] = useState([]);
  const [error, setError] = useState({ error: false, message: '' });
  
  const [favorites, setFavorites] = useState(() => {
    const savedFaves = localStorage.getItem('Favorites');
    const parsedFaves = JSON.parse(savedFaves);
    return parsedFaves || [];
  });

  useEffect(() => {
    localStorage.setItem('Favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (cocktail) => {
    setFavorites([...favorites, cocktail]);
  };

  const deleteFavorite = (id) => {
    const filteredCocktails = favorites.filter(
      (cocktail) => cocktail.id !== id
    );
    setFavorites(filteredCocktails);
  };

  return (
    <div className='App'>
      <NavBar
        setError={setError}
        setCocktails={setCocktails}
        getCocktails={getCocktails}
      />
      <div className='main'>
        <div className='concentric-rings'>
          <div className='ring ring3'></div>
          <div className='ring ring2'></div>
          <div className='ring ring1'></div>
        </div>
        <div className='background-color'></div>
        <div className='app-content'>
        {error.error && <Error error={error} />}
          <Routes>
            <Route
              path='/favorites'
              element={
                <FavoritesPage
                  setError={setError}
                  favorites={favorites}
                  deleteFavorite={deleteFavorite}
                />
              }
            />
            <Route
              path='/'
              element={
                <>
                  {!error.error && (
                    <CocktailWrapper
                      error={error}
                      setError={setError}
                      favorites={favorites}
                      deleteFavorite={deleteFavorite}
                      addToFavorites={addToFavorites}
                      cocktails={cocktails}
                    />
                  )}
                </>
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
