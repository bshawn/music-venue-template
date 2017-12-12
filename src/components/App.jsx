import React, {Component} from 'react';
import Header from './Header';
import Nav from './Nav';
import Social from './Social';
import Footer from './Footer';
import Events from './Events';
// import AddEventForm from './AddEventForm';

class App extends Component {
  constructor(props){
    super(props);
    this.addEvent = this.addEvent.bind(this);
    this.state = {
      events: {}
    };
  }

  addEvent(newEvent) {
    //update our state
    const events = {
      ...this.state.events
    };
  
    //add new event
    const timestamp = Date.now();  
    events[`event-${timestamp}`] = newEvent;
  
    //set state
    this.setState({events});

    console.log(this.state.events);
    console.log("event added sucessfully");
  }

  render(){

    const childWithProp = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {
        add: this.addEvent,
        events: this.state.events
      });
    });
    
    return (
      <div className="App">
        <Header/>
        <Nav/>
        {childWithProp}
        <Social/>
        <Footer/>
      </div>
    );
  }
}

export default App;
