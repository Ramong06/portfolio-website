import React, { useState, useEffect }from 'react';
import "./styles.css";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../Navbar";
const words = ["Developer.", "Creator.", "Problem Solver."];

const Hero = () => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [blink, setBlink] = useState(true);
    const [reverse, setReverse] = useState(false);

    // Typing Effect
    useEffect(() => {
        if (index === words.length) return;

        if (subIndex === words[index].length + 1 &&
            index !== words.length - 1 && !reverse) {
            setReverse(true);
            return;
        }
        
        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => prev + 1);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 :
            150, parseInt(Math.random() * 350)));
        
        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse]);

    return (
        <div className="hero">
            <Container fluid="md">
                <Navbar />
                <Row className="pt-5 justify-content-md-center">
                    <div className="hero-text">
                        <h1 className="typing__header">Ramon Garza III</h1>
                        <p>I AM A</p>
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