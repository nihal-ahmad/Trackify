import React from "react";
import axios from "axios";
import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard/Dashboard";
// import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
function App() {
  axios.defaults.baseURL = "https://opening-endpoints.herukoapp.com";

  return (
    <Provider store={store}>
      <Router>
        {/* <Navbar /> */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
