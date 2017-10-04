import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';


class Nav extends Component {
	render() {
		return (
			<nav className="main-nav">
				<ul className="full-nav">
		 
				    <NavLink to="/events" className="nav-link" activeClassName="active">Live Music</NavLink>
            		
					<NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink>
				
					<NavLink to="/programs" className="nav-link" activeClassName="active">Programs</NavLink>
				
					<NavLink to="/news" className="nav-link" activeClassName="active">News</NavLink>
				
					<NavLink to="/rental" className="nav-link" activeClassName="active">Venue Rental</NavLink> 
				
					<NavLink to="/contact" className="nav-link" activeClassName="active">Contact</NavLink>
					
		        </ul>
			</nav>
		)
	}
}

export default Nav;

// <ul>
// 				    <li>
//             			<IndexLink to='/events'>Live Music</IndexLink>
// 		          	</li>
// 					<li>
// 						<Link to='/about'>About</Link>r
// 					</li>
// 					<li>
// 						<Link to='/programs'>Programs</Link>
// 					</li>
// 					<li>
// 						<Link to='/news'>News</Link>
// 					</li>	
// 					<li>
// 						<Link to='/rental'>Venue Rental</Link>
// 					</li>
// 					<li>
// 						<Link to='/contact'>Contact</Link>
// 					</li>
// 		        </ul>