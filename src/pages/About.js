import React from 'react';
import "../App.css";
import Sidebar from '../components/Sidebar';
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../components/Navbar";
import MyPic from "../images/my-pic.jpeg";

const About = () => {
    return (
        <div className="about-page">
            <Navbar />
            <Container>
                <Sidebar />
                <Row>
                    <Col size="md-4 sm-6 justify-content-md-center">
                        <img className="myPicImage" src={MyPic} alt="male-in-front-of-computer" />
                    </Col>
                    <Col>
                        <p>HELLO MY NAME IS RAMON GARZA III AND I AM A WEB DEVELOPER.  I MAKE WEBSITES AND THINGS!</p>
                        <hr/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About;
