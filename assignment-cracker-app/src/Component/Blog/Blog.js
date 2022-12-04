import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';
import './Blog.css'
const Blog = ({ card }) => {
    const { name, logo ,id,total} = card;
    return (
        <div>
            <CardGroup className='first-1'>
                <Card>
                    <Card.Img style={{ width: '90rem',height:'25rem' }} src={logo} />
                    <Card.Body>
                        <Card.Title style={{textAlign:'center'}}>{name}</Card.Title>
                        <h4 style={{color:'blue',marginLeft:'620px'}}><small>Total Question: {total}</small></h4>
                    </Card.Body>
                    <Card.Footer>
                        <Link to={`/blog/${id}`}>
                            <Button style={{marginLeft:'630px'}}  variant="primary">Quiz Practises <ArrowForwardIcon></ArrowForwardIcon></Button>
                        </Link>
                    </Card.Footer>
                </Card>
            </CardGroup><br></br>

        </div>

    );
};

export default Blog;