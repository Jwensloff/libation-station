import { NavLink } from 'react-router-dom';
import './NavBar.css';
import Search from '../Search/Search';
import img from '../../Assets/cocktail-svg.svg';
import PropTypes from 'prop-types';

function NavBar({ setCocktails, getCocktails, setError }) {
  
  return (
    <nav className='nav-bar'>
      <div className='cocktial-container'>
        <img className='cocktail-svg' src={img} alt='martini glass' />
        <h1 className='title'>Libation Station</h1>
      </div>
      <div className='btn-wrapper'>
      <Search
        setCocktails={setCocktails}
        getCocktails={getCocktails}
        setError={setError}
      />
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

NavBar.propTypes = {
  setCocktails: PropTypes.func.isRequired,
  getCocktails: PropTypes.func.isRequired, 
  setError: PropTypes.func.isRequired,
}

export default NavBar;
