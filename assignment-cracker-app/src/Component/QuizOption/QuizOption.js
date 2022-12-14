import React from 'react';

const QuizOption = ({ option, correctAnswer }) => {
    const handleClick=()=>{
        if(option ===correctAnswer){
            alert("Good Job!!This is correct Ans");
    
        }
        else{
            alert("Oh No..This is wrong ans");
        }
    }
    // console.log(option);
    return (

        <div className = 'border-4 m-2 p-6 rounded-xl' >
            <button onClick={handleClick}>
                <ul className='list-disc list-inside -ml-5'><li>{option}</li></ul></button>
        </div >
    );
};

export default QuizOption;