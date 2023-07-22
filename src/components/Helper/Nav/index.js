import { NavLink } from 'react-router-dom';
import './index.scss';
import {AiOutlineHeart} from 'react-icons/ai'
import {FaUserCircle} from 'react-icons/fa'

function Navbar() {
  return (
    <>
    <div className='navbar'>
      <div className='logo'>
        <NavLink to='/'> <img src="https://cdn.icon-icons.com/icons2/2389/PNG/512/bitcoin_logo_icon_145452.png" alt="" />CRYPTO-APP</NavLink>
        
      </div>
      <div className='nav-items'>
        
      <span><NavLink to='/'>Home</NavLink></span>
      <span><NavLink to='/coins'>Coins</NavLink></span>
      <span><NavLink to='/exchanges'>Exchanges</NavLink></span>
      <span><NavLink to='/about-us'>About Us</NavLink></span>
      <span className='heart'><NavLink to='/favorites'><AiOutlineHeart /></NavLink></span>
      </div>
      <div className='profile'>
        <span><NavLink to='/my-profile'><FaUserCircle /></NavLink></span>
      </div>
    </div>
    </>
  );
}

export default Navbar;
