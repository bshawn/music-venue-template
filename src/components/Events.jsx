import React, {Component} from 'react';
import AddEventForm from './AddEventForm';
import Container from './Container';
import Event from './Event';

class Events extends Component {
    render() {
        return (
            <Container>
                <ul className="live-events-container is-grid">
                    <AddEventForm add={this.props.add}/>
                    <Event/>
                    <Event/>
                    <Event/>
                    <Event/>
                    {/* {Object.keys(this.props.events).map((key) => <Event key={key} event={this.props.events[key]}/>)} */}
                </ul>
            </Container>
        );
    }
}

export default Events;
