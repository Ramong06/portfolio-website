import React, { useState } from 'react';
import "./styles.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import AskWinstonImg from "../../images/ask-winston.png";

// const CustomToggle = ({ children, eventKey }) => {
//     const decoratedOnClick = useAccordionToggle(eventKey, () =>
//         console.log('totally custom!'),
//   );

//   return (
//     <button
//       type="button"
//       style={{ backgroundColor: 'green' }}
//       onClick={decoratedOnClick}
//     >
//       {children}
//     </button>
//   );
// }

const AskWinston = () => {
    return (
        <div>
            <Accordion defaultActiveKey="0">
                <Card style={{ width: '18rem' }}>
                    <Card.Header>
                        {/* <CustomToggle eventKey="0">Ask Winston</CustomToggle> */}
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
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
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    )
}

export default AskWinston;
