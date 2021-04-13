import React from 'react';
import "./styles.css";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


const Navbar2 = () => {
    return (
        <div>
            <Navbar collapseOnSelect variant="dark" expand="lg">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto" activeKey="/home" expand="lg">
                <Nav.Item>
                <Link
                    to="/"
                    className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
                    id="hoverable"
                >
                <span className="navbar-link">HOME</span> 
                </Link>
                </Nav.Item>
                <Nav.Item>
                <Link
                    to="/resume"
                    className={window.location.pathname === "/resume" ? "nav-link active" : "nav-link"}
                    id="hoverable"
                >
                <span className="navbar-link">RESUMÉ</span> 
                </Link>
                </Nav.Item>
                {/* <Nav.Item>
                <Nav.Link eventKey={3} href="/gallery"><span className="navbar-link">GALLERY</span></Nav.Link>
                </Nav.Item> */}
                <Nav.Item>
                <Link
                    to="/portfolio"
                    className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
                    id="hoverable"
                >
                <span className="navbar-link">PORTFOLIO</span> 
                </Link>
                </Nav.Item>
                {/* <Nav.Item>
                <Link
                    to="/contact"
                    className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
                    id="hoverable"
                >
                <span className="navbar-link">CONTACT</span> 
                </Link>
                </Nav.Item> */}
                </Nav>   
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Navbar2;
