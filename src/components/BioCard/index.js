import React from 'react';
import "./styles.css";

const BioCard = () => {
    return (
    <div className="row justify-content-center" id="bioCardId">
      <div className="card mb-3" style={{ width: "800px" }} id="bioCardId">
        <div className="row no-gutters">
          <div className="col-md-12">
            <h3 className="card-title">ABOUT ME</h3>
          <div className="card-body"> </div>
          </div>
          <div className="col-md-12">
            <p className="card-text">
              I am a Full Stack Web Developer with a background in oil and gas.  I earned a certificate in Full Stack Development from the University
              of Texas, where I developed new skills and honed my skills in HTML5, CSS, Javascript and MySQL. 
            </p>
            <p className="card-text">
              An innovative problem solver passionate about developing apps, with a focus on mobile-first design and development. My experience 
              in oil and gas has taught me how to adapt to a fast-paced worked enviornment that is always changing and how to implement new information
              as it is received. This experience has prepared me to approach projects with creativity and teamwork.
            </p>
            <p className="card-text">
              When I'm not designing or developing, I enjoy streaming and playing video games, outdoor activities, cooking and hanging out with my 2 dogs, Doc and Ranger
              and cat, Jack Jack the Cat.
            </p>
            <p className="card-text">
              I look forward to leveraging my skills as a part of a fast-paced, quality-driven team.  Reach out to me by clicking the links below.
            </p>
            <div className="row justify-content-center" id="card-link">
                <span className="social-buttons"><a href="https://github.com/Ramong06" target="_blank" rel="noopener noreferrer"><i className="fab fa-github" id="github" style={{ color: 'midnightblue' }} /></a>
                <a href="https://www.linkedin.com/in/ramon-garza-908611199/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in" id="linkedIn" style={{ color: 'midnightblue' }} /></a></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default BioCard;
