import React from 'react';
import "../App.css";
import Sidebar from '../components/Sidebar';
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../components/Navbar";
import AskWinstonCard from "../components/AskWinstonCard";


const About = () => {
    return (
        <div className="portfolio-page">
            <Navbar />
            <Container>
                <Sidebar />
                <Row>
                    <Col size="md-3 sm-6 justify-content-md-right" id="bioCard"> 
                        <AskWinstonCard />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About;
