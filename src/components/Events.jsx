import React, {Component} from 'react';
import Container from './Container';

class Events extends Component {
    render() {
        return (
          <Container>        	
            <section className="live-events-container">
        			<div className="event-container">event1</div>
        			<div className="event-container">event2</div>
	          	<div className="event-container">event3</div>
	          	<div className="event-container">event5</div>
      		  </section>
            </Container>
        );
    }
}

export default Events;