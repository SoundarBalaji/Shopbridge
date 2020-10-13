import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Mainpage from './components/Mainpage.js'
import Itempage from './components/itempage.js'
import Nav from './components/nav.js'

function App() {
  return (
    <Router>
      <div>
        <Nav /> 
        <Switch>
          <Route path="/" exact component={Mainpage} />
          <Route path="/:id" component={Itempage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
