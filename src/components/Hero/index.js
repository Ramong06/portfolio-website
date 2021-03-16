import React from 'react';
import "./styles.css";
import { Container, Row, Col } from "react-bootstrap";
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
                <Row className="pt-3 justify-content-center" id="homeButtons">
                    <Col>
                        <button className="btn from-top">RESUME</button>
                    </Col>
                    <Col>
                        <button className="btn from-top">GALLERY</button>
                    </Col>
                    <Col>
                        <button className="btn from-top">ABOUT</button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Hero;