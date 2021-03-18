import React from 'react';
import "../App.css";
import SkillsBar from '../components/SkillsBar';
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar"
import resumepdf from "../assets/ramon-garza-resume.pdf";
import * as FaIcons from "react-icons/fa";

const Resume = () => {
    return (
        <div className="resume-page">
            <Navbar />
            <Container>
                <Sidebar />
                <h1 className="resumeTitle">Ramon Garza III</h1>
                <h5 className="resumeInfoHeader">(832) 773-7728 | ramong5406@gmail.com | Katy, TX 77493</h5>
                <Row>
                <Col size="md-4 sm-6 justify-content-md-center">
                <div>
                <h2>TECHNICAL SKILLS</h2>
                <p>Node.Js., Express, JavaScript, ES 6+, jQuery, React.js, React 16.8+/Redux, JSX, GIT, GitHub, MongoDB, MySQL, Mongoose, Handlebars,
                HTML, CSS, Bootstrap, Materialize, APIs, Heroku, Terminal, AJAX, Rest API, GraphQL, React Hooks, JSON, Sequelize, Java, Springboot,
                debugging, Excel, Vue.js, Python.</p>
                </div>
                <div className='skillsBar'>
                    <h6>Skill Level</h6>
                    <SkillsBar name="HTML5" value={90} />
                    <SkillsBar name="CSS3" value={90} />
                    <SkillsBar name="JavaScript" value={90} />
                    <SkillsBar name="React.js" value={90} />
                    <SkillsBar name="Vue.js" value={90} />
                    <SkillsBar name="Bootstrap" value={95} />
                    <SkillsBar name="Rest API" value={80} />
                    <SkillsBar name="GraphQL" value={80} />
                    <SkillsBar name="JQuery" value={80} />
                    <SkillsBar name="MongoDB" value={80} />
                    <SkillsBar name="MySQL" value={75} />
                    <SkillsBar name="GIT" value={90} />
                    <SkillsBar name="Mongoose" value={85} />
                    <SkillsBar name="Java" value={85} />
                    <SkillsBar name="Node.js" value={85} />
                    <SkillsBar name="Python" value={70} />
                    </div>
                    <a href={resumepdf} download="ramon-resume">
                        <button className="resume-btn" type="button">
                        <FaIcons.FaDownload />
                        &nbsp; DOWNLOAD RESUME
                        </button>
                    </a>
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
                <h4>Spatial Consulting</h4>
                </div>
                <div>
                <h5>Full Stack Developer (Contractor) - Houston, TX | 07/2020-10/2020</h5>
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
                <h4>Multi-Skilled Operator (MSO) - South, TX | 10/2011 - 01/2021</h4>
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

export default Resume
