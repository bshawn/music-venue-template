import React, { Component } from 'react';
import Header from './Header';
import Nav from './Nav';
import Container from './Container';
import Social from './Social';
import Footer from './Footer';


class App extends Component {
  render() {
    const childWithProp = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child);
    });
    return (
      <div className="App">
        <Header/>
        <Nav/>
        <Container>
        {childWithProp}
        </Container>
        <Social/>
        <Footer/>
      </div>
    );
  }
}


export default App;
