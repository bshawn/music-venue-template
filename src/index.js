import React from 'react';
import ReactDOM from 'react-dom';
// import {browserHistory, Router, Route, IndexRoute} from 'react-router';
// import {render} from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import App from './components/App';
import Home from './components/Home';
import Events from './components/Events';
import About from './components/About';
import Programs from './components/Programs';
import News from './components/News';
import Rental from './components/Rental';
import Contact from './components/Contact';

import './css/style.css';

ReactDOM.render(( 
	<BrowserRouter>
  <App>
	<Switch>
      <Route exact path='/' component={Home}/>
      <Route path='events' component={Events}/>
      <Route path='about' component={About}/>
      <Route path='programs' component={Programs}/>
      <Route path='news' component={News}/>
      <Route path='rental' component={Rental}/>
      <Route path='contact' component={Contact}/>
      </Switch>
  </App>
  </BrowserRouter>
), document.getElementById('root'));