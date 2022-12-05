import React from 'react';
import QuizOption from '../QuizOption/QuizOption';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
const Quiz = ({ card }) => {
    const { options, question, correctAnswer } = card;
    console.log(correctAnswer);
    const handleClick=()=>{
        alert("Correct Ans is : "+JSON.stringify(correctAnswer));
    }
    return (
        <div className='border rounded w-912 mx-auto my-6 bg-gray-100'>
            <div className='flex flex-row place-content-between '>
            <div className='text-cyan-600 font-bold p-4'>
                {question}
            </div>
            <div className='mt-6'>
                <RemoveRedEyeIcon onClick={handleClick}></RemoveRedEyeIcon>
            </div>
            </div>
     

            <div className='grid grid-cols-2 w-full mx-auto mt-6 mb-6'>
                {
                    options.map(option =>
                        <QuizOption
                            correctAnswer={correctAnswer}
                            option={option}
                        ></QuizOption>)
                }

            </div>

        </div>
    );
};

export default Quiz;