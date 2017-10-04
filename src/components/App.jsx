import React, { Component } from 'react';
import Header from './Header';
import Nav from './Nav';
// import Home from './Home';
import Social from './Social';
import Footer from './Footer';
// import About from './About';

// import Content from './Content'

class App extends Component {
  render() {
    const childWithProp = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child);
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
