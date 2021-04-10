import React from 'react';
import "./styles.css";
// import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


const Navbar2 = () => {
    return (
        <div>
            <Navbar variant="dark" expand="lg">
                <Navbar.Toggle className="toggle-button" aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="justify-content-end" activeKey="/home" expand="lg">
                <Nav.Item>
                <Nav.Link href="/"><span className="navbar-link">HOME</span></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey={2} href="/resume"><span className="navbar-link">RESUMÉ</span></Nav.Link>
                </Nav.Item>
                {/* <Nav.Item>
                <Nav.Link eventKey={3} href="/gallery"><span className="navbar-link">GALLERY</span></Nav.Link>
                </Nav.Item> */}
                <Nav.Item>
                <Nav.Link eventKey={4} href="/portfolio"><span className="navbar-link">PORTFOLIO</span></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey={5} href="/contact"><span className="navbar-link">CONTACT</span></Nav.Link>
                </Nav.Item>
                </Nav>   
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Navbar2;
