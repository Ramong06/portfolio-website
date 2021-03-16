import React from 'react';
import "./styles.css";
import { Container, Row } from "react-bootstrap";
import Navbar from "../Navbar";

const Hero = () => {
    // const [isOpen, setIsOpen] = useState(false);

    // const toggle = () => {
    //     setIsOpen(!isOpen);
    // }
    return (
        <div className="hero">
            <Container fluid="md">
                <Navbar />
                <Row className="pt-5 justify-content-md-center">
                    <div className="hero-text">
                        <h1 className="typing__header">I am Ramon Garza III</h1>
                        <p>And I'm a Web Developer</p>
                    </div>
                </Row>
                <Row className="pt-3 justify-content-md-center">
                    <button className="resumeBtn">Resume</button>
                    <button className="resumeBtn">Gallery</button>
                    <button className="resumeBtn">About</button>
                </Row>
            </Container>
        </div>
    )
}

export default Hero;