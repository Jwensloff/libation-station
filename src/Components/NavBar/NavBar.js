import { NavLink } from 'react-router-dom';
import './NavBar.css'
import Search from '../Search/Search';
function NavBar({setCocktails, getCocktails}) {
  return (
    <nav className='nav-bar'>
      <Search setCocktails={setCocktails} getCocktails={getCocktails}/>
      <NavLink className='home-btn' to='/'>Home</NavLink>
      <NavLink className='see-faves-btn 'to='/favorites'>Favorites</NavLink>
    </nav>
  )
}

export default NavBar