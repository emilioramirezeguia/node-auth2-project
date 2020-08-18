import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Users from "./components/Users";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Signup} />
        <Route exact path="/signin" component={Signin} />
        <Router exact path="/signup" component={Signup} />
        <Router exact path="/usres" component={Users} />
      </div>
    </Router>
  );
}

export default App;
