import { NavLink } from 'react-router-dom';
import './NavBar.css';
import Search from '../Search/Search';
import img from '../../Assets/cocktail-svg.svg';

function NavBar({ setCocktails, getCocktails, isError, setError }) {
  
  return (
    <nav className='nav-bar'>
      <div className='cocktial-container'>
        <img className='cocktail-svg' src={img} alt='martini glass' />
      </div>
      <Search
        setCocktails={setCocktails}
        getCocktails={getCocktails}
        isError={isError}
        setError={setError}
      />
      <div className='btn-wrapper'>
        <NavLink className='home-btn' to='/'>
          Home
        </NavLink>
        <NavLink className='see-faves-btn ' to='/favorites'>
          Favorites
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
