import { NavLink } from 'react-router-dom';
import './NavBar.css'

function NavBar() {
  return (
    <nav className='nav-bar'>
      <NavLink className='home-btn' to='/'>Home</NavLink>
      <NavLink className='see-faves-btn 'to='/favorites'>Favorites</NavLink>
    </nav>
  )
}

export default NavBar