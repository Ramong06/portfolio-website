import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"
import TwitterCloneImg from "../../images/twitter-clone.png";

const TwitterClone = () => {
    return (
        <div>
            <Card className="card-body" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={TwitterCloneImg} />
                <Card.Body>
                    <Card.Title>TWITTER CLONE</Card.Title>
                    <Card.Text>
                        is a Twitter-Clone app that was created in React.js. The user can create a tweet and/or add an image that will be saved in the
                        Google Firebase database. The user can then see that tweet/image in the feed below. The user can also switch in and out of "Dark Mode".
                    </Card.Text>
                    <Button variant="primary" href="https://github.com/Ramong06/twitter-clone" rel="noreferrer" target="_blank">GitHub Repo</Button>
                    <div className="button-divider" />
                    <Button variant="primary" href="https://twitter-clone5488.netlify.app/" rel="noreferrer"  target="_blank">Live Site</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default TwitterClone;