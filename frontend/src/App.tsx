import React from 'react';
import axios from 'axios';
import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from "./components/Dashboard/Dashboard";
function App() {

  axios.defaults.baseURL = 'https://opening-endpoints.herukoapp.com';

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/dashboard" exact component={Dashboard}/>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
