import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import Home from './components/Home';
import CatsContainer from './components/cats/CatsContainer';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'


ReactDOM.render((
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/cats" component={CatsContainer}/>
      </Route>
    </Router>
), document.getElementById('root'));


