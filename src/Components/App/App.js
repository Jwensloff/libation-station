import NavBar from '../NavBar/NavBar';
import Search from '../Search/Search';
import './App.css';
import getCocktails from '../../apiCalls';
import { useState } from 'react';
import CocktailWrapper from '../CocktailWrapper/CocktailWrapper';
function App() {
  const [cocktails, setCocktails] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (cocktail) => {
    setFavorites((prev) => [...prev, cocktail]);
  };

  const deleteFavorite = (id) => {
    const filteredCocktails = favorites.filter(cocktail => cocktail.id !== id)
    setFavorites(filteredCocktails)
  }

  console.log('faves',favorites)
  return (
    <div className='App'>
      <NavBar />
      <Search setCocktails={setCocktails} getCocktails={getCocktails} />
      <CocktailWrapper deleteFavorite={deleteFavorite} addToFavorites={addToFavorites} cocktails={cocktails} />
    </div>
  );
}

export default App;
