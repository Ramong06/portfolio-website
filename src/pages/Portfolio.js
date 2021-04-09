import React from 'react';
import "../App.css";
import Sidebar from '../components/Sidebar';
import { Container, Row, Col } from "react-bootstrap";
import Navbar2 from "../components/Navbar2";
import AskWinstonCard from "../components/AskWinstonCard";
import TwitterCloneCard from "../components/TwitterCloneCard";
import GameBlog from "../components/GameBlog";
import EmployeeDirectoryCard from '../components/EmployeeDirectory';
import PizzaSiteCard from '../components/PizzaSiteCard';


const About = () => {
    return (
        <div className="portfolio-page">
            <Navbar2 />
            <Container>
                <Sidebar />
                <Row className="justify-content-center pt-5">
                    {/* <Col size="md-3 sm-6 justify-content-md-right" id="bioCard"> 
                        <AskWinstonCard />
                    </Col> */}
                    <Col size="md-3 sm-6 justify-content-md-right" id="bioCard"> 
                        <TwitterCloneCard />
                    </Col>
                    <Col size="md-3 sm-6 justify-content-md-right" id="bioCard"> 
                        <EmployeeDirectoryCard />
                    </Col>
                </Row>
                <Row className="justify-content-center pt-3">
                    <Col size="md-3 sm-6 justify-content-md-right" id="bioCard"> 
                        <GameBlog />
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
