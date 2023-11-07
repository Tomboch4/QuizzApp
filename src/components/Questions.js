import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { modifyParams } from '../actions/params.action';
import { updatePoints } from '../actions/result.action';

const Questions = ({quest,params,nb,dif}) => {

    const dispatch = useDispatch()
    const points = useSelector(state => state.pointsReducer)
    const [alreadyAnswer,setAlreadyAnswer] = useState(false)
    const [goodAnswer,setGoodAnswer] = useState(false)
    const [wrongAnswer,setWongAnswer] = useState(false)

    const { question, correctAnswer,answers } = quest;

    useEffect(()=>{
      setAlreadyAnswer(false),
      setGoodAnswer(false),
      setWongAnswer(false)
    },[quest])

    const handleVerifAnswer = (ans) =>{
      if (alreadyAnswer === false){
        if( ans === correctAnswer){
            setGoodAnswer(true)
            dispatch(updatePoints(points.points+1))
            setAlreadyAnswer(true)
        }else{
          setAlreadyAnswer(true)
          setWongAnswer(true)
        }
    }
  }
    
    const handleNextQuestion = (newIndex) =>{
        dispatch(modifyParams(newIndex))
    }


    return (
        <div className='question-container'>
            <div className="params">
            <div className="category">{params}</div>
            <div className="difficulty">{dif}</div>
            </div>
          <h3>Question n°: {nb+1}</h3>
          <p className='question'>{question}</p>
          <div className="answer-container">
            {answers.map((ans) => <div className={`answer ${alreadyAnswer ? (ans===correctAnswer ? 'correct' : 'incorrect'):''}`} onClick={()=>handleVerifAnswer(ans)}>{ans}</div>)}
          </div>
          {
            goodAnswer ? (<div className='congrats'> Good answer +1 point </div>) : wrongAnswer ? (<div className='congrats'> Good answer : {correctAnswer} <br />+0 point </div>) :null
          }
          <div className="btn next-question" onClick={()=>handleNextQuestion(nb+1)}>
            Next question
          </div>
        </div>
      );
    };

export default Questions;