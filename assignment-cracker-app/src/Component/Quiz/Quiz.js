import React from 'react';
import QuizOption from '../QuizOption/QuizOption';
const Quiz = ({card}) => {
    const {options,question,correctAnswer}=card;
    return (
        <div className='border rounded border-orange-400w9-12 mx-auto my-6 bg-gray-100'>
        <div className='text-cyan-600 font-bold p-4'>
            {question}
        </div>
        <div className='flex flex-row justify-center align-center'>

        </div>
        
        <div className='grid grid-cols-2 w-full mx-auto mt-6 mb-6'>
            {
                options.map(option => 
                    <QuizOption
                    correctAnswer ={correctAnswer}
                    option={option}
                    ></QuizOption>)
            }

        </div>

    </div>
    );
};

export default Quiz;