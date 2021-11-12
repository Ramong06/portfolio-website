import React from 'react';
import "../App.css";
import { Container, Row, Col } from "react-bootstrap";
import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar"
// import * as FaIcons from "react-icons/fa";

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
                <div>
                            <h2>TECHNICAL SKILLS</h2>
                            <hr className='skills-line'></hr>
                            <h4>Programming Languages</h4>
                            <p>JavaScipt</p>
                            <p>Java</p>
                            <p>Python</p>
                            <br></br>
                            <h4>Front-End</h4>
                            <p>ReactJS</p>
                            <p>Redux</p>
                            <p>NextJS</p>
                            <p>AngularJS</p>
                            <p>Vue3</p>
                            <p>jQuery</p>
                            <br></br>
                            <h4>Back-End</h4>
                            <p>Rest API</p>
                            <p>Node.js</p>
                            <p>GraphQL</p>
                            <br></br>
                            <h4>Databases</h4>
                            <p>PostreSQL</p>
                            <p>MySQL</p>
                            <p>MongoDB</p>
                            <p>Firebase</p>
                            <br></br>
                            <h4>Other Tools</h4>
                            <p>Git</p>
                            <p>Github/Gitlab</p>
                            <p>Visual Studio Code</p>
                            <p>IntelliJ IDEA</p>
                            <p>Wordpress</p>
                            <p>Webflow</p>
                </div>
                </Col>
                <Col size="md-8 sm-6 justify-content-md-center">
                <div>
                <h2>PROFESSIONAL SUMMARY</h2>
                    <p>Front-End React Developer/Full Stack Software Engineer leveraging 10 years in oil and gas. Has a
                        strong passion for innovation and a keen eye for aesthetics and presentation.
                        Obtained a certificate in web development from the University of Texas, gaining experience while also honing my skills in HTML, CSS,
                        Bootstrap, Javascript, React and SQL. Excellent communication skills and collaborator who works well on team-based projects, as well as
                        independently. Recognized for problem-solving and ability to adapt and implement new information as a part of a fast-paced environment.
                    </p>
                </div>
                <div>
                <h2>PROFESSIONAL EXPERIENCE</h2>
                </div>
                <div>
                <h4>Poetic</h4>
                </div>
                <div>
                <h5>Junior Software Developer - Houston, TX | 03/2020-Current</h5>
                    <p>Interfacing and translating client’s business requirements into technical applications and solutions. Tasked to assist in the handling of
                        end-to-end software development in a timely manner to meet contract deadlines while also assisting more experienced developers re-factor
                        and debug their code.
                    </p>
                <ul>
                    <li>Increased efficiency and collaboration at work-place by assisting senior devs with front-end code by using React, JavaScript, HTML and CSS to build UI components.</li>
                    <li>Work with basic front-end prototype and page design utilizing HTML5/HTML, CSS3/CSS, JavaScript, jQuery, Ajax, JSON, React, Typescript, Bootstrap/Bootstrap 4, Vue js and Webpack.</li>
                    <li>Collaborate with the Designer or Design team to build responsive websites.</li>
                    <li>Work with a small team in an agile environment to accommodate employee and client needs.</li>
                    <li>Assist with managing website development projects from initial design through to completion.</li>
                    <li>Assist with optimizing cross-browser and multi-platform compatibility using Bootstrap and MaterialUI. </li>
                    <li>Collaborate and contribute to building components created with React or Vue.</li>
                    <li>Use MongoDB and Studio3T to add clients info.</li>
                    <li>Create Line Graph visualization displaying real-time metrics queries using Recharts, Typescript, React, GraphQL.</li>
                    <li>Connect NoSQL and SQL database to React application to pull testimonials and comments to display on the page.</li>
                    <li>Utilize Visual Studio, Bootstrap 4, HTML, CSS, Jquery, React, Vue.js, Node.js to create dynamic and easy to navigate User Interfaces for private companies. </li>
                    <li>Collaborate with team members to create mobile friendly UI.</li>
                    <li>Constant learning through online resources to implement the latest software trends, frameworks and libraries.</li>
                    <li>Work as a part of a team or autonomously. </li>
                </ul>
                </div>
                <div>
                <h4>Wood</h4>
                </div>
                <div>
                <h4>Multi-Skilled Operator/Logistics Coordinator - South, TX | 10/2010 - 03/2020</h4>
                <p>Keep track of all single-well and multi-well facilities oil and natural gas production. Apply proper maintenance to equipment when
                    and if necessary.</p>
                <ul>
                    <li>Promoted after only one year to team Lead</li>
                    <li>Assigned to largest production facilities owned by company</li>
                    <li>Awarded safety leader in 2012</li>
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
