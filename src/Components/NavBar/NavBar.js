import { NavLink } from 'react-router-dom';
import './NavBar.css';
import PropTypes from 'prop-types';

function NavBar() {
  
  return (
    <nav className='nav-bar'>
      <div className='cocktial-container'>
        <h1 className='title'>Libation Station</h1>
      </div>
      <div className='btn-wrapper'>
   
      <div className='home-fave-btn-wrapper'>
        <NavLink className='home-btn' to='/libation-station/home'>
          Home
        </NavLink>
        <NavLink className='search-btn' to='/libation-station/search' >
          Search
        </NavLink>
        <NavLink className='see-faves-btn' to='/libation-station/favorites'>
          Favorites
        </NavLink>
        </div>
      </div>
    </nav>
  );
}

NavBar.propTypes = {
  // setCocktails: PropTypes.func.isRequired,
  // getCocktails: PropTypes.func.isRequired, 
  // setError: PropTypes.func.isRequired,
}

export default NavBar;
