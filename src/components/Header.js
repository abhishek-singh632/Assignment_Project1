import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Nav className="me-auto"> 
                    <NavLink to="/" className="text-decoration-none text-light mx-2"><strong>User Registration</strong></NavLink>
                    <NavLink to="/" className="text-decoration-none text-light mx-3"><strong>Home</strong></NavLink>
                </Nav>     
                    <NavLink to="/" className="text-decoration-none text-light" ><strong>LOGOUT</strong></NavLink>
                    
                </Container>
            </Navbar>
        </>
    )
}

export default Header