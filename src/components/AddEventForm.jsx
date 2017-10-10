import React, { Component } from 'react';

class AddEventForm extends Component {
    render() {
        return (
            <form action="" className="event-edit">
                <label htmlFor="artist">Artist</label>
                <input type="text" placeholder="Artist Name"/>

                <label htmlFor="title">Title</label>
                <input type="text" placeholder="Event Title"/>

                <label htmlFor="Date of Show">Date of Show</label>
                <input type="date" placeholder="Date of Show"/>

                <label htmlFor="Date Ticket Sales Begin">Date Ticket Sales Begin</label>
                <input type="date" placeholder="Date of Ticket Sales"/>
                
                <label htmlFor="Time of Show">Time of Show</label>
                <input type="time" placeholder="Time of Show"/>

                <label htmlFor="Time of Show">Time of Show</label>
                <input type="time" placeholder="Time of Doors"/>
                
                <label htmlFor="Featured Image">Featured Image</label>
                <input type="text" placeholder="Featured Image"/>
                
                <label htmlFor="Price Advanced">Price Advanced</label>
                <input type="number" placeholder="Price Advanced"/>
                
                <label htmlFor="Price Doors">Price Doors</label>
                <input type="number" placeholder="Price Doors"/>
                
                <label htmlFor="Bio">Bio</label>
                <textarea placeholder="Artist Bio"></textarea>
                
                <label htmlFor="Link to Artist Website">Link to Artist Website</label>
                <input type="text" placeholder="Link to Artist Website"/>
                
                <label htmlFor="Link to YouTube">Link to YouTube</label>
                <input type="text" placeholder="Link to YouTube Video"/>
             
                <button type="submit">submit</button>
            </form>
        );
    }
}

export default AddEventForm;