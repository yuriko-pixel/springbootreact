import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import navscc from '../components'

function Navbar () {
    return(
        <div className={navscc.container}>
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Blog">Blog</Link>
        </div>
    )
}

export default Navbar;