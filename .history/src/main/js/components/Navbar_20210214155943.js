import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { Navbar, Form } from 'react-bootstrap';

function Nav () {
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

export default Nav;