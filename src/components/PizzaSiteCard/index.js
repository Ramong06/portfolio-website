import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"
import PizzaSite from "../../images/pizza-site.png";

const PizzaSiteCard = () => {
    return (
        <div>
            <Card className="card-body" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={PizzaSite} />
                <Card.Body>
                    <Card.Title>Pizza Restaurant Template</Card.Title>
                    <Card.Text>
                        Is a Responsive Ecommerce Restaurant Design built with React utilizing styled components.
                    </Card.Text>
                    <Button className="card-buttons" href="https://github.com/Ramong06/pizza-site" rel="noreferrer" target="_blank">GitHub Repo</Button>
                    <div className="button-divider" />
                    <Button className="card-buttons" href="https://restaurant-template5406.netlify.app/" rel="noreferrer"  target="_blank">Live Site</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default PizzaSiteCard;