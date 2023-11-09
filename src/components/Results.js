import React from 'react';
import { useSelector } from 'react-redux';

const Results = () => {

    const points = useSelector(state=>state.pointsReducer)
    const params = useSelector(state=>state.paramsReducer[0])


    const handleNewQuizz = () =>{
        window.location.reload()
    }

    return (
        <div className='result-container'>
            <div className="result">
            Finish ! <br />
            Total :
            </div>
            <div className="total-points">
            {points.points} points
            </div>
            
                Your game parameter:
                <div className="past-game-params">
                <div className="total-amount-question parameter">
                    {params.nb} questions
                </div>
                <div className="parameter cat">
                    {params.cat}
                </div>
                <div className="parameter dif">
                    {params.dif}
                </div>
            </div>
            <div className="btn" onClick={handleNewQuizz}>
                <div className="btn-text">New quizz</div>
            </div>
        </div>
    );
};

export default Results;