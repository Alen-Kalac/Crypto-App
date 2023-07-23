import { NavLink } from 'react-router-dom';
import './index.scss';

function Footer() {
  return (
    <>
    <div className='footer'>
      <div className='footer-box'>
        <span><NavLink to='/'>Website</NavLink></span>
        <span><NavLink to='/my-profile'>Users</NavLink></span>
        <span><NavLink to='/coins'>Coins</NavLink></span>
        <span><NavLink to='/exchanges'>Exchanges</NavLink></span>
      </div>
      <div className="description">Crypto app made by : Demir Subašić, Alen Kalač, Muhamed Gusinac, Matej Kevkić, Mehmed Mekić</div>
    <div className='copyright'>© 2023 Crypto App</div>
    </div>
    </>
  );
}

export default Footer;
