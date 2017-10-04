import React, {Component} from 'react';

class Social extends Component {
    render() {
        return (        	
            <section className="social-widgets-container">
              <div className="facebook-feed-container social-widget">
                <h3>facebook</h3>
                <div className="facebook-widget widget"></div>
                <p>follow us on @facebook</p>
              </div>
              <div className="insta-feed-container social-widget">              
                <h3>instagram</h3>
                <div className="instagram-widget widget"></div>
                <p>follow us on @instagram</p>
              </div>
              <div className="spotify-player-container social-widget">
                <h3>spotify</h3>
                <div className="spotify-widget widget"></div>
                <p>follow us on @spotify</p>
              </div>
              </section>
        );
    }
}

export default Social;