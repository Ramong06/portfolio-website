import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";
import EmployeeDirectoryImg from "../../images/employee-directory.jpeg";


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
                        <img className='modal-image' alt='pic-of-twitter-clone' src={EmployeeDirectoryImg} height='500px' width='700px' />
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Is an application in which the user will be able to search through a company directory for an employee. The user will be met
                    with a list of company employees. The user will then be able to search a specific employee by name. <a href="https://github.com/Ramong06/employee-directory" className="modal-github__icon" rel="noreferrer" target="_blank"><i className="fa fa-github"></i></a>
                    <a href="https://employee-directory5406.netlify.app/" className="modal-external-link__icon" rel="noreferrer" target="_blank"><i class="fa fa-external-link"></i></a>
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
                Employee Directory
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