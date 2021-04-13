import React, { useState } from 'react';
import "./styles.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";


const MyVerticallyCenteredModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <span className="wave">👋🏼 </span>  HELLO! 
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>I Am Ramon Garza III</h4>
            <p className="">
                A Full Stack Web Developer with a background in oil and gas.  I earned a certificate in Full Stack Development from the University
                of Texas, where I learned new skills to compliment my previous experience with HTML5, CSS, Javascript and MySQL. 
            </p>
            <p className="">
                  An innovative problem solver passionate about developing apps, with a focus on mobile-first design. My experience 
                  in oil and gas has taught me how to adapt to a fast-paced work enviornment that is always changing and how to implement new information
                  as it is received. This experience has taught me to approach projects with creativity and teamwork.
            </p>
            <p className="">
              When I'm not creating or problem solving, I enjoy streaming and playing video games, outdoor activities, cooking and hanging out with my wife, 2 dogs and cat.
            </p>
            <p className="">
              I look forward to leveraging my skills as a part of a fast-paced, quality-driven
              team.  If you're looking for a fast learning, creative and critical thinking web
              developer to join your team, then look no further.
              Reach out to me through social media by clicking one of the social links on my
              page or send me an email from my contact page!
            </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const AboutModal = () => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
        <Button className="about-me-button" onClick={() => setModalShow(true)}>
        Click Here To Meet Me
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
        </>
    )
}

export default AboutModal;