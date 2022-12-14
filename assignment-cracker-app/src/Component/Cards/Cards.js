import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Blog from '../Blog/Blog';
import Home from '../Home/Home';
import './Cards.css';

const Cards = () => {
    const cards = useLoaderData();
    // console.log(cards);
    return (
        <div >
            <div>
                <Home></Home>
            </div>

            <div >
                <div>
                    <div className='arg'>
                        {
                            (cards.data).map(card =>
                                <Blog
                                    key={card.name}
                                    card={card}
                                ></Blog>
                            )
                        }
                    </div>

                </div>

            </div>
        </div>

    );
};

export default Cards;