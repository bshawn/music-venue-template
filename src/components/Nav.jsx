import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';


class Nav extends Component {
	render() {
		return (
			<nav className="main-nav">
				<ul className="nav-container">
					<ul className="nav-link-list">
						<li className="nav-link"><NavLink to="/events" className="link" activeClassName="active">Live Music</NavLink></li>
					</ul>

					<ul className="nav-link-list">
						<li className="nav-link"><NavLink to="/about" className="link" activeClassName="active">About</NavLink></li>
						<li className="nav-link nav-link-sub"><NavLink to="/about/our-story" className="link" activeClassName="active">Our Story</NavLink></li>
					</ul>
					
					<ul className="nav-link-list">
						<li className="nav-link"><NavLink to="/programs" className="link" activeClassName="active">Programs</NavLink></li>
						<li className="nav-link-sub"></li>
					</ul>
					
					<ul className="nav-link-list">
						<li className="nav-link"><NavLink to="/news" className="link" activeClassName="active">News</NavLink></li>
					</ul>
					
					<ul className="nav-link-list">
						<li className="nav-link"><NavLink to="/rental" className="link" activeClassName="active">Venue Rental</NavLink></li>
					</ul>
					
					<ul className="nav-link-list">
						<li className="nav-link"><NavLink to="/contact" className="link" activeClassName="active">Contact</NavLink></li>
					</ul>
				</ul>
			</nav>
		)
	}
}

export default Nav;







// <ul className="full-nav">

// 	<NavLink to="/events" className="nav-link" activeClassName="active">Live Music</NavLink>

// 	<NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink>

// 	<NavLink to="/programs" className="nav-link" activeClassName="active">Programs</NavLink>

// 	<NavLink to="/news" className="nav-link" activeClassName="active">News</NavLink>

// 	<NavLink to="/rental" className="nav-link" activeClassName="active">Venue Rental</NavLink>

// 	<NavLink to="/contact" className="nav-link" activeClassName="active">Contact</NavLink>

// </ul>