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
            <Container fluid>
                <Navbar />
                <Row>
                    <div className="hero-text">
                        <h1>I am Ramon Garza III</h1>
                        <p>And I'm a Web Developer</p>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Hero;