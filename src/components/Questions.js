import React, { useEffect, useState,useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { modifyParams } from '../actions/params.action';
import { updatePoints } from '../actions/result.action';
import { Textfit } from 'react-textfit';


const Questions = ({quest,params,nb,dif}) => {

    const dispatch = useDispatch()
    const points = useSelector(state => state.pointsReducer)
    const [alreadyAnswer,setAlreadyAnswer] = useState(false)
    const [goodAnswer,setGoodAnswer] = useState(false)
    const [wrongAnswer,setWongAnswer] = useState(false)

    const { question, correctAnswer,answers } = quest;



   

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

    useEffect(()=>{
      setAlreadyAnswer(false),
      setGoodAnswer(false),
      setWongAnswer(false)
    },[quest])

    return (
        <div className='question-container'>
            <div className="game-params">
            <div className="category">{params}</div>
            <div className="difficulty">{dif}</div>
            
            </div>
            <div className="points">{points.points} <span>pts</span></div>
          <h3>Question n°: {nb+1}</h3>
          <div className="question" >
            <Textfit style={{height:"80px"}} min={12} max={32}>
            {question}
            </Textfit>
          </div>
          <div className="answer-container">
            {answers.map((ans) => <div className={`answer ${alreadyAnswer ? (ans===correctAnswer ? 'correct' : 'incorrect'):''}`} onClick={()=>handleVerifAnswer(ans)}>
              <Textfit style={{height:"40px", width:"80px", margin:"5px auto"} } min={8} max={28}>
              {ans}
              </Textfit>
              </div>)}
          </div>
          {
            goodAnswer ? (<div className='answer-result congrats'> Correct ! + 1 point </div>) : wrongAnswer ? (<div className='answer-result wrong'> Incorrect ! <br />Good answer : {correctAnswer} <br />+ 0 point </div>) :null
          }
          <div className="btn next-question" onClick={()=>handleNextQuestion(nb+1)}>
            <div className="btn-text">Next question</div>
          </div>
        </div>
      );
    };

export default Questions;