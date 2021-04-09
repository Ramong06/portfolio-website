import React from 'react';
import "./styles.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"
import AskWinstonImg from "../../images/ask-winston.png";

const AskWinston = () => {
    return (
        <div>
            <Card className="card-body" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={AskWinstonImg} />
                <Card.Body>
                    <Card.Title>ASK WINSTON</Card.Title>
                    <Card.Text>
                        is a search engine that searches for music suggestions based on Artists or Songs.  After entering a search item, the user will 
                        then be presented with a list of songs or artists that are all similar to the search query.  Along with the list of songs/artists, the user
                        is also able to sample a song and see the lyrics to said song. Click on the link below to check out Ask Winston.
                    </Card.Text>
                    <Button variant="primary" href="https://github.com/On-Your-Marc-GO/Ask-Winston-Music-Rec-Engine" rel="noreferrer"  target="_blank">GitHub Repo</Button>
                    <Button variant="primary" href="https://on-your-marc-go.github.io/Ask-Winston-Music-Rec-Engine/" rel="noreferrer"  target="_blank">Live Site</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default AskWinston;
