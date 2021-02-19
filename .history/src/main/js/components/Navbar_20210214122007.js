import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

function Navbar () {
    return(
        <div>
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Blog">Blog</Link>
        </div>
    )
}

export default Navbar;