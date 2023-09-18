import NavBar from '../NavBar/NavBar';
import Search from '../Search/Search';
import './App.css';
import getCocktails from '../../apiCalls';
import { useState } from 'react';
import CocktailWrapper from '../CocktailWrapper/CocktailWrapper';
function App() {

  const [cocktails, setCocktails] = useState([])

  return (
    <div className='App'>
      <NavBar />
      <Search setCocktails={setCocktails} getCocktails={getCocktails}/>
      <CocktailWrapper cocktails={cocktails}/>
    </div>
  );
}

export default App;
