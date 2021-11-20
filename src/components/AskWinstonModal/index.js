import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";
import AskWinstonImg from "../../images/ask-winston.png";

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
                        <img className='modal-image' alt='pic-of-twitter-clone' src={AskWinstonImg} height='500px' width='700px' />
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    is a search engine that searches for music suggestions based
                    on Artists or Songs.  After entering a search item, the user
                    will then be presented with a list of songs or artists that
                    are all similar to the search query.  Along with the list of
                    songs/artists, the user is also able to sample a song and see
                    the lyrics to said song. Click on the link below to check out
                    Ask Winston. <a href="https://github.com/On-Your-Marc-GO/Ask-Winston-Music-Rec-Engine" className="modal-github__icon" rel="noreferrer" target="_blank"><i className="fa fa-github"></i></a>
                    <a href="https://on-your-marc-go.github.io/Ask-Winston-Music-Rec-Engine/" className="modal-external-link__icon" rel="noreferrer" target="_blank"><i class="fa fa-external-link"></i></a>
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
                Ask Winston
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