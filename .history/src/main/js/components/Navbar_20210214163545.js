import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { Navbar, Form } from 'react-bootstrap';

function Nav () {
    return(
        <div style={{display: "flex", justifyContent: "space-around"}}>
                <Link to="/">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/Blog">Blog</Link>
        </div> 
    )
}

export default Nav;