import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"
import GameBlogImg from "../../images/game-blog.png";

const GameBlog = () => {
    return (
        <div>
            <Card className="card-body" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={GameBlogImg} />
                <Card.Body>
                    <Card.Title>Game Blog</Card.Title>
                    <Card.Text>
                        A single page web application created with Vue3. The purpose of the site is a UI template for a video game blog website. It is set
                        up to show where the user will be able to create an account.  Future developement will include the ability to create a blog post about a
                        video game they have played or want to play.
                    </Card.Text>
                    <Button variant="primary" href="https://github.com/Ramong06/game-blog-vue" rel="noreferrer"  target="_blank">GitHub Repo</Button>
                    <Button variant="primary" href="https://game-blog5488.netlify.app/" rel="noreferrer"  target="_blank">Live Site</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default GameBlog;