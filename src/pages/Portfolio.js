import React from 'react';
import "../App.css";
import Sidebar from '../components/Sidebar';
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../components/Navbar";
import AskWinstonCard from "../components/AskWinstonCard";
import TwitterCloneCard from "../components/TwitterCloneCard";
import GameBlog from "../components/GameBlog";
import EmployeeDirectoryCard from '../components/EmployeeDirectory';
import PizzaSiteCard from '../components/PizzaSiteCard';


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
                    <Col size="md-3 sm-6 justify-content-md-right" id="bioCard"> 
                        <TwitterCloneCard />
                    </Col>
                    <Col size="md-3 sm-6 justify-content-md-right" id="bioCard"> 
                        <GameBlog />
                    </Col>
                    <Col size="md-3 sm-6 justify-content-md-right" id="bioCard"> 
                        <EmployeeDirectoryCard />
                    </Col>
                    <Col size="md-3 sm-6 justify-content-md-right" id="bioCard"> 
                        <PizzaSiteCard />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About;
