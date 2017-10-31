import React, { Component } from 'react';

class AddEventForm extends Component {
    createEvent(e) {
        e.preventDefault();
        // console.log("in");
        const eventObj = {
            // id: Date.now(),
            img: this.img.value,
            name: this.name.value,
            title: this.title.value,
            dateSale: this.dateSale.value,
            dateShow: this.dateShow.value,
            timeShow: this.timeShow.value,
            timeDoors: this.timeDoors.value,
            priceAdv: this.priceAdv.value,
            priceDoors: this.priceDoors.value,
            desc: this.desc.value,
            linkMain: this.linkMain.value,
            linkFB: this.linkFB.value,
            linkSC: this.linkSC.value,
            video: this.video.value
        }
        console.log(event);
        this.props.addEvent(eventObj);
        this.addForm.reset();
    }
    
    render() {
        return (
        <div className="addEventForm-container">
            <h3 className="add-form-header">Add Event</h3>
            
            <form ref={(input) => this.addForm = input} className="event-edit" onSubmit={(e) => this.createEvent(e)}>
                <div className="input-container">
                    <label htmlFor="Featured Image">Featured Image</label>
                    <input ref={(input) => this.img = input} type="text" placeholder="Featured Image.jpg"/>
                </div>
                <div className="input-container">
                    <label htmlFor="artist">Artist</label>
                    <input ref={(input) => this.name = input} type="text" placeholder="Artist Name"/>
                </div>
                <div className="input-container">
                    <label htmlFor="title">Title</label>
                    <input ref={(input) => this.title = input} type="text" placeholder="Event Title"/>
                </div>
                <div className="input-container">
                    <label htmlFor="Date Ticket Sales Begin">Date Ticket Sales Begin</label>
                    <input ref={(input) => this.dateSale = input} type="date" placeholder="Date of Ticket Sales"/>
                </div>
                <div className="input-container">
                    <label htmlFor="Date of Show">Date of Show</label>
                    <input ref={(input) => this.dateShow = input} type="date" placeholder="Date of Show"/>
                </div>
                <div className="input-container">
                    <label htmlFor="Time of Show">Time of Show</label>
                    <input ref={(input) => this.timeShow = input} type="time" placeholder="Time of Show"/>
                </div>
                <div className="input-container">
                    <label htmlFor="Time of Show">Time of Doors</label>
                    <input ref={(input) => this.timeDoors = input} type="time" placeholder="Time of Doors"/>
                </div>
                <div className="input-container">
                    <label htmlFor="Price Advanced">Price Advanced</label>
                    <input ref={(input) => this.priceAdv = input} type="number" placeholder="Price Advanced"/>
                </div>
                <div className="input-container">
                    <label htmlFor="Price Doors">Price Doors</label>
                    <input ref={(input) => this.priceDoors = input} type="number" placeholder="Price Doors"/>
                </div>
                <div className="input-container">
                    <label htmlFor="Bio">Desc</label>
                    <textarea ref={(input) => this.desc = input} placeholder="Artist Bio"></textarea>
                </div>
                <div className="input-container">
                    <label htmlFor="Link to Artist Website">Link to Artist Website</label>
                    <input ref={(input) => this.linkMain = input} type="text" placeholder="Link to Artist Website"/>
                </div>
                <div className="input-container">
                    <label htmlFor="Link to FaceBook Event">Link to FaceBook event</label>
                    <input ref={(input) => this.linkFB = input} type="text" placeholder="Link to Artist FaceBook"/>
                </div>
                <div className="input-container">
                    <label htmlFor="Link to Artist SoundCloud">Link to Artist SoundCloud</label>
                    <input ref={(input) => this.linkSC = input} type="text" placeholder="Link to Artist Soundcloud"/>
                </div>
                <div className="input-container">
                    <label htmlFor="Link to YouTube">Link to YouTube</label>
                    <input ref={(input) => this.video = input} type="text" placeholder="Link to YouTube Video"/>
                </div>
                <button className="submit-button" type="submit">submit</button>
            </form>
        </div>
        );
    }
}

export default AddEventForm;