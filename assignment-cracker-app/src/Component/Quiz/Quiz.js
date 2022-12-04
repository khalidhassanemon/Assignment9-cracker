import React from 'react';

const Quiz = ({card}) => {
    const {options,question}=card;
    return (
        <div>
            <h4>{question}</h4>
        </div>
    );
};

export default Quiz;