import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  
  return (
    <nav className='nav-bar'>
      <div className='title-container'>
        <h1 className='title'>Libation Station</h1>
      </div>   
      <div className='btn-wrapper'>
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
    </nav>
  );
}

export default NavBar;
