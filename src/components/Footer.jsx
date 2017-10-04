import React from 'react';
import {NavLink} from 'react-router-dom';

import logo_large from '../images/logo_large.png';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import mail from '../images/mail.png';



const Footer = (props) => {
  return (
      <div className="footer">
      	<div className="map-container">
      		<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3175.3910119030083!2d-79.94430858469701!3d37.26215397985601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884d0da2a211cb7f%3A0x374cb6a4fc691681!2s5+Points+Music+Sanctuary!5e0!3m2!1sen!2sus!4v1506366497039" width="600" height="450" frameBorder="0" allowFullScreen></iframe>
      	</div>
      	<div className="logo-container-large">
          <NavLink to="/"><img src={logo_large} className="logo_large" alt="logo large"/></NavLink>
      	<div className="social-icon-container social-footer">
      		<a className="social-icon" href="https://www.facebook.com/5pointsmusic/" target="_blank"><img src={facebook} className="facebook-icon icon" alt="facebook icon"/></a>
      		<a className="social-icon" href="https://www.instagram.com/5pointsmusicfoundation/" target="_blank"><img src={instagram} className="insta-icon icon" alt="instagram icon"/></a>
      		<a className="social-icon" href="mailto:info@5pointsmusic.com" target=""><img src={mail} className="mail-icon icon" alt="mail icon"/></a>
      	</div>
      	<div className="footer-info-container">
	      	<a className="footer-info" href="https://goo.gl/maps/Je9odQNVriG2" target="_blank">
	          <address className="address">1217 Maple Avenue Roanoke, VA 24015</address>
	      	</a>
      		<a className="footer-info" href="mailto:info@5pointsmusic.com" target="">info@5pointsmusic.com</a>
	      	<a className="footer-info" href="tel:540-795-5618" alt="telephone 540-795-5618">540-795-5618</a>
      	</div>
      	</div>
      </div>
  )
};

export default Footer;