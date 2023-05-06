import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import React from 'react'
import {Link} from 'react-router-dom'
const Header = () => {
    return (
        <div className="container">
            <div className="">
                <Navbar collapseOnSelect expand="lg" className="c ">
                    <Container>
                        <Navbar.Brand 
                            >
                                <Nav.Link as={Link} to="/"  eventKey={1}>
                                      <p className="navitems  about "
                                >
                                About
                            </p>
                                </Nav.Link>
                          
                            {' '} </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="bg-light"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link as={Link}
                                    to="/skills"
                                    eventKey={2}
                                    className="">
                                    <p className="navitems btn about ">
                                        Skills
                                    </p>
                                </Nav.Link>
                                <Nav.Link className=""
                                
                                    as={Link}
                                      eventKey={3}
                                    to="/resume">
                                    <p className="navitems btn about">Resume</p>
                                </Nav.Link>

                                <Nav.Link as={Link}  eventKey={4}  to="/award"   >
                                    <p className="navitems btn about">Award</p>
                                </Nav.Link>
                                <Nav.Link as={Link}
                                    to="/contact"
                                    eventKey={5}>
                                    <p className="navitems btn about ">
                                        Contact
                                    </p>
                                </Nav.Link>
                                <Nav.Link as={Link}
                                    to="/projects"
                                    eventKey={6}
                                >
                                    <p className="navitems btn about">
                                        Projects
                                    </p>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    )
}
export default Header
