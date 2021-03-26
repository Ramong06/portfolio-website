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
                    <Col size="md-4 sm-6 justify-content-md-center">
                        <p className="p1">
                            I am a Full Stack Web Developer with a background in oil and gas.  I earned a certificate in Full Stack Development from the University
                            of Texas, where I developed new skills and honed my skills in HTML5, CSS, Javascript and MySQL.
                        </p>
                        <hr className="about-line"/>
                        <p className="p2">
                            An innovative problem solver passionate about developing apps, with a focus on mobile-first design and development. My experience 
                            in oil and gas has taught me how to adapt to a fast-paced worked enviornment that is always changing and how to implement new information
                            as it is received. This experience has prepared me to approach projects with creativity and teamwork.
                        </p>
                        <hr className="about-line"/>
                        <p className="p3">
                            When I'm not designing or developing, I enjoy streaming and playing video games, outdoor activities, cooking and hanging out with my 2 dogs, Doc and Ranger
                            and cat, Jack Jack the Cat.
                        </p>
                        <hr className="about-line"/>
                        <p className="p4">
                            I look forward to leveraging my skills as a part of a fast-paced, quality-driven team.  Reach out to me by clicking the links below.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About;
