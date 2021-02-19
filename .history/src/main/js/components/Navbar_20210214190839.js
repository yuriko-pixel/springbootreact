import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

function Nav () {
    return(
        <div style={{display: "flex", justifyContent: "space-around"}}>
            <h1><Link to="/">Home</Link></h1>
            <Link to="/About">About</Link>
            <Link to="/Blog">Blog</Link>
        </div> 
    )
}

export default Nav;