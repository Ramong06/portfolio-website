import React, { useState, useEffect }from 'react';
import "./styles.css";
import { Container, Row } from "react-bootstrap";
import Sidebar from "../Sidebar";
import Navbar2 from "../Navbar2";
import MyPic from "../../images/my-pic2.jpeg";
import AboutModal from "../AboutModal";
const words = ["Designer", "Creator", "Problem Solver", "Web Developer."];

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

    // Blinker
    useEffect(() => {
        const timeout2 = setTimeout(() => {
            setBlink((prev) => !prev);
        }, 500);

        return () => clearTimeout(timeout2);
    }, [blink]);

    return (
        <div className="background">
            <Navbar2 />
            <Container fluid="md">
                <Sidebar />
                <Row className="justify-content-center pt-5"></Row>
                <Row className="justify-content-center pt-5" id="home-row" >
                    <img className="myPicImage" src={MyPic} alt="male-in-front-of-computer" />
                </Row>
                <Row className="justify-content-center">
                    <div className="hero-header-text">
                        <h1 className="my-name">Ramon <span className="letter-g">G</span>arza</h1>
                    </div>
                </Row>
                <Row className="justify-content-center">
                    <div className="hero-text">
                        <h3 className="typeWriter"><span className="iAm"></span>{`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}</h3>
                    </div>
                </Row>
                <Row className="justify-content-center pt-4" id="modal-row">
                    <AboutModal />
                </Row>
            </Container>
        </div>
    )
}

export default Hero;