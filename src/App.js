import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Resume from "./pages/Resume";
import HomePage from "./pages/HomePage";

function App () {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Resume} />
        <Route exact path="/resume" component={HomePage} />
      </div>
    </Router>
  );
}

export default App;

