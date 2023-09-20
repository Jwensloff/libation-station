import NavBar from '../NavBar/NavBar';
import Search from '../Search/Search';
import './App.css';
import getCocktails from '../../apiCalls';
import { useEffect, useState } from 'react';
import CocktailWrapper from '../CocktailWrapper/CocktailWrapper';
import { Route, Routes } from 'react-router-dom';
import FavoritesPage from '../FavoritesPage/FavoritesPage';

function App() {
  const [cocktails, setCocktails] = useState([]);

  const [favorites, setFavorites] = useState(() => {
    const savedFaves = localStorage.getItem('Favorites');
    const parsedFaves = JSON.parse(savedFaves);
    return parsedFaves || [];
  });

  const [isFavorite, setIsFavorite] = useState(false);

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
      <NavBar />
      <div className='main'>
        <div className='big-box-border'>
          <Routes>
            <Route
              path='/favorites'
              element={
                <FavoritesPage
                  favorites={favorites}
                  deleteFavorite={deleteFavorite}
                  setIsFavorite={setIsFavorite}
                  isFavorite={isFavorite}
                />
              }
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
                    favorites={favorites}
                    deleteFavorite={deleteFavorite}
                    addToFavorites={addToFavorites}
                    cocktails={cocktails}
                    isFavorite={isFavorite}
                    setIsFavorite={setIsFavorite}
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
