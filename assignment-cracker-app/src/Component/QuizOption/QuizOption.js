import React from 'react';

const QuizOption = ({option}) => {
    // console.log(option);
    return (
        <div className='border-4 m-2'>
            <button>
             <ul className='list-disc list-inside'><li>{option}</li></ul></button>
        </div>
    );
};

export default QuizOption;