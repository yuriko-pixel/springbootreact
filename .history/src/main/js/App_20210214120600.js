import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Navbar';
import About from './About';
import Home from './Home';

function App() {
    
    return (
        <div className="App">
            <Router>
                <Navbar/>
                <Route exact path='/' component={Home}/>
                <Route path='/About' component={About}/>
            </Router>
        </div>
    )
  }

export default App;

ReactDOM.render(<App />, document.querySelector("#app"));