import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';

function App() {

  axios.defaults.baseURL = 'https://opening-endpoints.herukoapp.com';

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
