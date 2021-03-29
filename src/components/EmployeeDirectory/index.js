import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"
import EmployeeDirectoryImg from "../../images/employee-directory.jpeg";

const EmployeeDirectoryCard = () => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={EmployeeDirectoryImg} />
                <Card.Body>
                    <Card.Title>Employee Directory</Card.Title>
                    <Card.Text>
                        Is an application in which the user will be able to search through a company directory for an employee. The user will be met
                        with a list of company employees. The user will then be able to search a specific employee by name.
                    </Card.Text>
                    <Button variant="primary" href="https://github.com/Ramong06/employee-directory" rel="noreferrer"  target="_blank">GitHub Repo</Button>
                    <Button variant="primary" href="https://employee-directory5406.netlify.app" rel="noreferrer"  target="_blank">Live Site</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default EmployeeDirectoryCard;