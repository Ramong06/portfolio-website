import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";
import GameBlogImg from "../../images/game-blog.png";


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
                        <img className='modal-image' alt='pic-of-twitter-clone' src={GameBlogImg} height='500px' width='700px' />
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    A single page web application created with Vue3. The purpose of the site is a UI template for a video game blog website. It is set
                    up to show where the user will be able to create an account.  Future developement will include the ability to create a blog post about a
                    video game they have played or want to play. <a href="https://github.com/Ramong06/game-blog-vue" className="modal-github__icon" rel="noreferrer" target="_blank"><i className="fa fa-github"></i></a>
                    <a href="https://game-blog5488.netlify.app/" className="modal-external-link__icon" rel="noreferrer" target="_blank"><i class="fa fa-external-link"></i></a>
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
                Game Blog
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