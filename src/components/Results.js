import React from 'react';
import { useSelector } from 'react-redux';

const Results = () => {

    const points = useSelector(state=>state.pointsReducer)
    const handleNewQuizz = () =>{
        window.location.reload()
    }

    return (
        <div className='result'>
            Finish ! <br />
            Total : <br/>
            {points.points} points
            <div className="btn" onClick={handleNewQuizz}>
                New quizz
            </div>
        </div>
    );
};

export default Results;