import NavBar from '../NavBar/NavBar';
import Search from '../Search/Search';
import './App.css';
import getCocktails from '../../apiCalls';
import { useState } from 'react';
import CocktailWrapper from '../CocktailWrapper/CocktailWrapper';
import { Route, Routes } from 'react-router-dom';
import FavoritesPage from '../FavoritesPage/FavoritesPage';

function App() {
  const [cocktails, setCocktails] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (cocktail) => {
    setFavorites([...favorites, cocktail]);
    // console.log('ALL FAVORITES', favorites)
  };

  const deleteFavorite = (id) => {
    const filteredCocktails = favorites.filter(
      (cocktail) => cocktail.id !== id
    );
    setFavorites(filteredCocktails);
  };

  console.log('faves',favorites);

  return (
    <div className='App'>
      <NavBar />
      <div className='main'>
        <div className='big-box-border'>
          <Routes>
            <Route
              path='/favorites'
              element={<FavoritesPage favorites={favorites} />}
            />
            <Route
              path='/'
              element={
                <>
                  <Search
                    setCocktails={setCocktails}
                    getCocktails={getCocktails}
                  />
                  <CocktailWrapper
                    deleteFavorite={deleteFavorite}
                    addToFavorites={addToFavorites}
                    cocktails={cocktails}
                  />
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
