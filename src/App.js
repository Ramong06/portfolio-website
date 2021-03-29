import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/Home';
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Resume from "./pages/Resume";

function App () {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/gallery" component={Gallery} />
      </div>
    </Router>
  );
}

export default App;

