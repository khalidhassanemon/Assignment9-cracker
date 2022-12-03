import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';
import './Blog.css'
const Blog = ({ card }) => {
    const { name, logo ,id} = card;
    return (
        <div >
            <CardGroup className='first-1'>
                <Card>
                    <Card.Img variant="top" src={logo} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                    </Card.Body>
                    <Card.Footer>
                        <Link to={`/quiz/${id}`}>
                            <Button  variant="primary">Quiz Practises -></Button>
                        </Link>
                    </Card.Footer>
                </Card>
            </CardGroup><br></br>

        </div>

    );
};

export default Blog;