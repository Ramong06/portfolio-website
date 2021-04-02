import React from 'react';
import "./styles.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";


const Navbar2 = () => {
    return (
        <div>
            {/* <Navbar className="navbar" collapseOnSelect expand="lg" variant="dark">
                <Navbar.Brand href="#home">LOGO</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="navbar-collapse" id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                    <Nav className="ml-auto" id="navbar-collapse">
                    <Nav.Link href="/"><span className="navbar-link">HOME</span></Nav.Link>
                    <Nav.Link eventKey={2} href="/resume"><span className="navbar-link">RESUMÉ</span></Nav.Link>
                    <Nav.Link eventKey={3} href="/gallery"><span className="navbar-link">GALLERY</span></Nav.Link>
                    <Nav.Link eventKey={4} href="/portfolio"><span className="navbar-link">PORTFOLIO</span></Nav.Link>
                    <Nav.Link eventKey={5} href="/contact"><span className="navbar-link">CONTACT</span></Nav.Link>
                    </Nav>
                    </Nav>
                </Navbar.Collapse>
            </Navbar> */}
              <Nav className="justify-content-end" activeKey="/home">
    <Nav.Item>
      <Nav.Link href="/home">Active</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav.Item>
  </Nav>
        </div>
    )
}

export default Navbar2;
