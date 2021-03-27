import React from 'react';
import "../App.css";
import Sidebar from '../components/Sidebar';
import { Container, Row } from "react-bootstrap";
import Navbar from "../components/Navbar";
// import BioCard from "../components/BioCard";
import AboutModal from "../components/AboutModal";

const About = () => {
    return (
        <div className="about-page">
            <Navbar />
            <Container>
                <Sidebar />
                <Row>
                    <AboutModal />
                </Row>
            </Container>
        </div>
    )
}

export default About;
