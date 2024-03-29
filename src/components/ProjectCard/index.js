import React from 'react';
import { Card, Button } from 'react-bootstrap';
import AskWinstonImg from '../../images/ask-winston.png';
import TwitterCloneImg from '../../images/twitter-clone.png';
import GameBlogImg from '../../images/game-blog.png';
import PizzaSiteImg from '../../images/pizza-site.png';
import EmployeeDirectoyImg from '../../images/employee-directory.jpeg';
import '../ProjectCard/styles.css';

const ProjectCard = () => {
    const cardInfo = [
        { image: TwitterCloneImg, title: 'Twitter Clone', text: 'blah' },
        { image: GameBlogImg, title: 'Game Blog', text: 'blah' },
        { image: PizzaSiteImg, title: 'Pizza Restaurant', text: 'blah' },
        { image: AskWinstonImg, title: 'Ask Winston', text: 'is a search engine that searches for music suggestions based on Artists or Songs.  After entering a search item, the user will then be presented with a list of songs or artists that are all similar to the search query.  Along with the list of songs/artists, the user is also able to sample a song and see the lyrics to said song. Click on the link below to check out Ask Winston.' },
        { image: EmployeeDirectoyImg, title: 'Employee Directory', text: 'blah' },
    ];

    const renderCard = (card, index) => {
        return (
            <div>
                <Card style={{ width: '18rem' }} key={ index } className='card-body'>
                    <Card.Img variant="top" src={ card.image } />
                    <Card.Body>
                        <Card.Title>{ card.title }</Card.Title>
                        <Card.Text>
                            { card.text }
                        </Card.Text>
                        <Button variant="primary" className="card-buttons">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }

    return (
        <div className='card-grid'>
            {cardInfo.map(renderCard)}
        </div>
    )
}

export default ProjectCard;
