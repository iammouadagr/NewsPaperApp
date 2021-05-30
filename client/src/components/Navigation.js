import React from 'react';
import {Navbar, Nav, Container, NavLink} from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';

const Navigation = () => {
    return (
        <>
            <Navbar collapseOnSelect fixed="top" expand='sm' bg='dark' variant='dark' >
                <Container>
                    <NavbarToggle aria-controls='responsive-navbar-nav' />
                    <NavbarCollapse id='responsive-navbar-nav'>
                        <Nav>
                            <NavLink href ='/'>Home</NavLink>
                            <NavLink href ='/health'>Health</NavLink>
                            <NavLink href ='/sports'>Sports</NavLink>
                            <NavLink href ='/entertainment'>Entertainment</NavLink>
                            <NavLink href ='/business'>Business</NavLink>
                        </Nav>
                    </NavbarCollapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation

