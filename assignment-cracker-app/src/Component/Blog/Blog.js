import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';
import './Blog.css'
const Blog = ({ card }) => {
    const { name, logo, id, total } = card;
    return (
        <div>
            <div>
                <CardGroup className='first-1'>
                    <Card>
                        <Card.Img style={{ width: '22rem', height: '9rem' }} src={logo} />
                        <Card.Body>
                            <Card.Title style={{ textAlign: 'center' }}>{name}</Card.Title>
                            <h4 style={{ color: 'blue', marginLeft: '25px' }}><small>Total Question: {total}</small></h4>
                        </Card.Body>
                        <Card.Footer>
                            <Link to={`/blog/${id}`}>
                                <Button style={{ marginLeft: '8px' }} variant="primary">Quiz Practises <ArrowForwardIcon></ArrowForwardIcon></Button>
                            </Link>
                        </Card.Footer>
                    </Card>
                </CardGroup><br></br>
            </div>


        </div>

    );
};

export default Blog;