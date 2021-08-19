import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Dashboards from "./components/Dashboard/Dashboards";

function App() {
  return (

  <Router>
    <Route path='/Login' component={Login}></Route>
    <Route path='/Register' component={Register}></Route>
    <Route path='/Dashboards' exact component={Dashboards}></Route>

  </Router>
  
  );
}

export default App;
