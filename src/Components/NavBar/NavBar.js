import { NavLink } from 'react-router-dom';
import './NavBar.css'

function NavBar({isFavorite, setIsFavorite}) {
  return (
    <nav className='nav-bar'>
      <NavLink onClick={setIsFavorite(false)} className='home-btn' to='/'>Home</NavLink>
      <NavLink onClick={setIsFavorite(true)}className='see-faves-btn 'to='/favorites'>Favorites</NavLink>
    </nav>
  )
}

export default NavBar