import React, {Component} from 'react';
import Events from './Events';
import Container from './Container';


class Home extends Component {
	render() {
    return (
			<section className="home-container">
				<section className="slideshow-section">slideshow section</section>
        <h2>Live Events</h2> 
        <section className="home-content-container">
          <Events/> 
          <div className="sidebar-container">
		        <aside className="subscribe-container">subscribe form container</aside>
		        <aside className="news-container-home widget">news container</aside>
          </div>
        </section>
			</section>
  	);
  }
}

export default Home;