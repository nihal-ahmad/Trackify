import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';

function App() {

  axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
