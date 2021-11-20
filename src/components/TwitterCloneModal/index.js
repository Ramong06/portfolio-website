import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";
import TwitterCloneImg from "../../images/twitter-clone.png";
import "./styles.css";

const ProjectModal = (props) => {
    return (
        <div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                <Modal.Title id='modal-title'>
                    <img className='modal-image' alt='pic-of-twitter-clone' src={TwitterCloneImg} height='500px' width='700px' />
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    This is a Twitter-Clone app that was created in React.js. The user can create a tweet and/or add an image that will be saved in the
                    Google Firebase database. The user can then see that tweet/image in the feed below. The user can also switch in and out of "Dark Mode".
                    <a href="https://github.com/Ramong06/twitter-clone" className="modal-github__icon" rel="noreferrer" target="_blank"><i className="fa fa-github"></i></a>
                    <a href="https://twitter-clone5488.netlify.app" className="modal-external-link__icon" rel="noreferrer" target="_blank"><i class="fa fa-external-link"></i></a>
                </Modal.Body>
            </Modal>
        </div>
    )
}

const MyProjectModal = () => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
        <div className="d-grid gap-2" id='modal-button__space'>
            <Button className="modal-button" size='lg' onClick={() => setModalShow(true)}>
            Twitter Clone
            </Button>
        </div>

      <ProjectModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
        </>
    )
}

export default MyProjectModal;
