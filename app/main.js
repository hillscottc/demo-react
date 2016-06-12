import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import Home from './components/Home';
import About from './components/About';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'


ReactDOM.render((
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/about" component={About}/>
      </Route>
    </Router>
), document.getElementById('root'));


