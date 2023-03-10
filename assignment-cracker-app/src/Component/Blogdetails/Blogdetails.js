import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './Blogdetails.css'
const Blogdetails = () => {
    const blog = useLoaderData();
    return (
        <div className='structure'>
            <h1>Quiz of {blog.data.name}</h1>
            {
                (blog.data.questions).map(card =>
                    <Quiz
                key={card.id}
                card={card}
                    ></Quiz>
                    )
            }
        </div>

    );
};

export default Blogdetails;