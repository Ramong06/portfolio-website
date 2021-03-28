import React, { useState } from 'react';
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
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>About Ramon Garza III</h4>
            <p className="">
                I am a Full Stack Web Developer with a background in oil and gas.  I earned a certificate in Full Stack Development from the University
                of Texas, where I developed new skills and honed my skills in HTML5, CSS, Javascript and MySQL. 
            </p>
            <p className="">
                  An innovative problem solver passionate about developing apps, with a focus on mobile-first design and development. My experience 
                  in oil and gas has taught me how to adapt to a fast-paced worked enviornment that is always changing and how to implement new information
                  as it is received. This experience has prepared me to approach projects with creativity and teamwork.
            </p>
            <p className="">
              When I'm not designing or developing, I enjoy streaming and playing video games, outdoor activities, cooking and hanging out with my 2 dogs, Doc and Ranger
              and cat, Jack Jack the Cat.
            </p>
            <p className="">
              I look forward to leveraging my skills as a part of a fast-paced, quality-driven team.  Reach out to me by clicking the links below.
            </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const AboutModal = () => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
        </>
    )
}

export default AboutModal;