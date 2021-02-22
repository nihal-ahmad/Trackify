import React from "react";
import axios from "axios";
import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Contact from "./components/Home/Contact/Contact";
import About from "./components/Home/About/About";
function App() {

  //productions
  // axios.defaults.baseURL = "https://trackify-endpoints.herukoapp.com/";

  //development
  axios.defaults.baseURL = "http://127.0.0.1:8000";


  return (
    <Provider store={store}>
      <Router>
        {<Navbar />}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/login" exact component={Login} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/about" exact component={About} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
