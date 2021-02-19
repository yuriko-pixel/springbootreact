import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

function Nav () {
    return(
        <div style={{display: "flex", justifyContent: "space-around"}}>
            <h1 style={{color: "#639",fontSize: "3rem", fontWeight: 900,textDecoration: none}}><Link to="/">Home</Link></h1>
            <ul className={}></ul>
            <Link to="/About">About</Link>
            <Link to="/Blog">Blog</Link>
        </div> 
    )
}

export default Nav;