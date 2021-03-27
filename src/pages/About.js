import React from 'react';
import "../App.css";
import Sidebar from '../components/Sidebar';
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../components/Navbar";
import BioCard from "../components/BioCard";

const About = () => {
    return (
        <div className="about-page">
            <Navbar />
            <Container>
                <Sidebar />
                <Row>
                    <Col>
                        <BioCard />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About;
