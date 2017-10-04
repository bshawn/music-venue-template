import React from 'react';
import {NavLink} from 'react-router-dom';

import logo from '../images/logo.png';
import logo_large from '../images/logo_large.png';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import mail from '../images/mail.png';



const Header = (props) => {
  return (
      <header className="App-header">
          <img src={logo_large} className="logo-mobile" alt="logo" />
        <NavLink to="/">
          <div className="logo-container">
            <img src={logo} className="site-logo" alt="logo" />
            <h1>POINTS MUSIC SANCTUARY</h1>
        	</div>
          
        </NavLink>
      	<div className="top-right-container">
      	<a href="https://goo.gl/maps/Je9odQNVriG2" target="_blank">
          <address className="address">1217 Maple Avenue Roanoke, VA 24016</address>
      	</a>
      	<div className="social-icon-container">
      		<a href="https://www.facebook.com/5pointsmusic/" target="_blank"><img src={facebook} className="social-icon" alt="facebook icon"/></a>
      		<a href="https://www.instagram.com/5pointsmusicfoundation/" target="_blank"><img src={instagram} className="social-icon" alt="instagram icon"/></a>
      		<a href="mailto:info@5pointsmusic.com" target=""><img src={mail} className="social-icon" alt="mail icon"/></a>
      	</div>	
      	</div>
        </header>
  )
};

export default Header;