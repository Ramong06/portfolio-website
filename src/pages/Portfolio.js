import React from 'react';
import "../App.css";
import ProjectCard from '../components/ProjectCard';
// import Sidebar from '../components/Sidebar';
// import Footer from "../components/Footer";
// import { Container, Row, Col } from "react-bootstrap";
import Navbar2 from "../components/Navbar2";
// import AskWinstonCard from "../components/AskWinstonCard";
// import TwitterCloneCard from "../components/TwitterCloneCard";
// import GameBlog from "../components/GameBlog";
// import EmployeeDirectoryCard from '../components/EmployeeDirectory';
// import PizzaSiteCard from '../components/PizzaSiteCard';


const About = ( { children }) => {
    return (
        <section className="portfolio-page">
            <Navbar2 />
            <ProjectCard />
            {/* <Container>
                <Sidebar />
                <Row className="justify-content-center pt-5">
                    <Col size="md-3 sm-6 justify-content-md-right" id="bioCard"> 
                        <TwitterCloneCard />
                    </Col>
                </Row>
                <Row className="justify-content-md-center pt-3">
                    <Col size="md-3 sm-6 justify-content-md-center" id="bioCard"> 
                        <GameBlog />
                    </Col>
                    <Col size="md-3 sm-6 justify-content-md-center" id="bioCard"> 
                        <PizzaSiteCard />
                    </Col>
                    <Col size="md-3 sm-6 justify-content-md-right" id="bioCard"> 
                        <AskWinstonCard />
                    </Col>
                    <Col size="md-3 sm-6 justify-content-md-right" id="bioCard"> 
                        <EmployeeDirectoryCard />
                    </Col>
                </Row>
                <Footer />
            </Container> */}
        </section>
    )
}

export default About;
