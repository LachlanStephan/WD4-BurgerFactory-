// import logo from './logo.svg';
import Header from './components/common/header/header';
import React from 'react';
import Home from './components/common/pages/home';
import About from './components/common/pages/about';
import Contact from './components/common/pages/contact';
import Locations from './components/common/pages/locations';
import Footer from './components/common/footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export function Links() {
  return (
    <Router>
    <div className="container">
      <div className="row">
      <div className="linksWrapper">
        <nav>
          <ul>
            <li>
              <Link to="/Home" id="linkStyle">Home</Link>
            </li>
            <li>
              <Link to="/About" id="linkStyle">About</Link>
            </li>
            <li>  
              <Link to="/Contact" id="linkStyle">Contact</Link>
            </li>
            <li>
              <Link to="/Locations" id="linkStyle">Locations</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/locations">
              <Locations />
            </Route>
          </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
  
}


function App() {
  return (

    <div className="App">
      <Header />
      <Links />
      <Footer />
     
    </div>
  );
}

export default App;
