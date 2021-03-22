import React from 'react';
import "../App.css";
import Sidebar from '../components/Sidebar';
import { Container, Row } from "react-bootstrap";
import Navbar from "../components/Navbar";

const About = () => {
    return (
        <div>
            <Navbar />
            <Container fluid="md">
                <Sidebar />
                <Row>
                    Image will go here.
                </Row>
            </Container>
        </div>
    )
}

export default About;
