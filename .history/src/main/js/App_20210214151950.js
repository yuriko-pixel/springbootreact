import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Blog from './components/Blog'

function App() {
    
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar/>
                <Route exact path='/' component={Home}/>
                <Route path='/About' component={About}/>
                <Route path='/Blog' component={Blog} />
            </BrowserRouter>
        </div>
    )
  }

export default App;

ReactDOM.render(<App />, document.querySelector("#app"));