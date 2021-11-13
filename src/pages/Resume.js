import React from 'react';
import "../App.css";
import { Container, Row, Col } from "react-bootstrap";
import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

const Resume = () => {
    return (
        <div className="resume-page">
            <Navbar2 />
            <Container>
                <Sidebar />
                <h1 className="resumeTitle">Ramon Garza III</h1>
                <h5 className="resumeInfoHeader">Houston, TX</h5>
                <hr className="resume_line"/>
                <Row>
                <Col size="md-4 sm-6 justify-content-md-center">
                <div className='tech-skills'>
                    <h3>TECHNICAL SKILLS</h3>
                    <hr className='skills-line'></hr>
                    <h4>Programming Languages</h4>
                        <ul>
                            <li>JavaScript</li>
                            <li>Java</li>
                            <li>Python</li>
                        </ul>
                    <br></br>
                    <h4>Front-End Frameworks</h4>
                        <ul>
                            <li>ReactJS</li>
                            <li>Redux</li>
                            <li>NextJS</li>
                            <li>AngularJS</li>
                            <li>Vue3</li>
                            <li>jQuery</li>
                        </ul>
                    <br></br>
                    <h4>Back-End</h4>
                        <ul>
                            <li>Rest API</li>
                            <li>Node.js</li>
                            <li>GraphQL</li>
                        </ul>
                    <br></br>
                    <h4>Databases</h4>
                        <ul>
                            <li>PostreSQL</li>
                            <li>MySQL</li>
                            <li>MongoDB</li>
                            <li>Firebase</li>
                        </ul>
                    <br></br>
                    <h4>Other Tools</h4>
                        <ul>
                            <li>Git</li>
                            <li>Github/Gitlab</li>
                            <li>Visual Studio Code</li>
                            <li>IntelliJ IDEA</li>
                            <li>Wordpress</li>
                            <li>Webflow</li>
                        </ul>
                </div>
                </Col>
                <Col size="md-8 sm-6 justify-content-md-center">
                <div>
                <h3>PROFESSIONAL SUMMARY</h3>
                    <p>Full Stack Software Engineer leveraging 10 years in oil and gas. Brings a
                        strong passion for data and innovation along with a keen eye for aesthetics and presentation.
                        Obtained a certificate in web development from the University of Texas, gaining experience while also honing my skills in HTML, CSS,
                        and JavaScript. Excellent communication skills and collaborator who works well on team-based projects, as well as
                        independently. Recognized for problem-solving and ability to adapt and implement new information as a part of a fast-paced environment.
                    </p>
                </div>
                <div>
                <h3>PROFESSIONAL EXPERIENCE</h3>
                </div>
                <div>
                <h4>Poetic</h4>
                </div>
                <div>
                <h5>Software Developer - Houston, TX | 05/2021-Current</h5>
                <ul>
                    <li>Increased efficiency and collaboration at work-place by assisting senior devs with front-end code by using React, JavaScript, HTML and CSS to build UI components.</li>
                    <li>Collaborate with the Design team to build responsive websites with mobile friendly UI and manage website development projects from initial design through to completion.</li>
                    <li>Work in an agile environment to accommodate employee and client needs.</li>
                    <li>Constant learning through online resources to implement the latest software trends, frameworks and libraries.</li>
                    <li>Work as a part of a team or autonomously.</li>
                </ul>
                </div>
                <div>
                <h4>Software Developer</h4>
                </div>
                <div>
                <h5>Freelance | 10/2020 - 05/2021</h5>
                <ul>
                    <li>Learn and implement latest technologies into passion projects and ideas.</li>
                </ul>
                </div>
                <div>
                <h4>Spatial Consulting</h4>
                </div>
                <div>
                <h5>Intern | 07/2020 - 10/2020</h5>
                <ul>
                    <li>Learn from senior developers and contribute to widgets and components in React app.</li>
                    <li>Learn and walk through Tableau.</li>
                </ul>
                </div>
                <div>
                <h4>WOOD</h4>
                </div>
                <div>
                <ul>
                    <li>Monitor Single well and mainline faciliy oil and gas production.</li>
                    <li>Conduct maintenance as needed.</li>
                    <li>Team Lead and Safety Leader 2013-2015</li>
                </ul>
                </div>
                <div>
                <h2>Education</h2>
                </div>
                <div>
                <h4>Full Stack Web Development Certificate - University of Texas​; Houston, TX | 2020 </h4>
                </div>
                <div>
                <p>A 24-week intensive boot camp program focused on gaining technical programming and market-driven skills.</p>
                </div>
                </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default Resume;
