import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { NavbarBar } from 'react-bootstrap';

function Navbar () {
    return(
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
                <Link to="/">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/Blog">Blog</Link>
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>
    )
}

export default Navbar;