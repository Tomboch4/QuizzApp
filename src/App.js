import React, { useState } from 'react';
import Params from './components/Params';
import Questions from './components/Questions';
import { useSelector } from 'react-redux';
import Results from './components/Results';

const App = () => {

  const questionsReducer = useSelector(state => state.questionReducer)
  const params = useSelector(state => state.paramsReducer)
  const questions = questionsReducer[0]


  return (
    <div className='app'>
      <h2 className='app-title'>The Quizz</h2>
      {params ? (
        questions && params ? (
          params[0].questionIndex < questions.length ? (
            <Questions quest={questions[params[0].questionIndex]} params={params[0].cat} nb={params[0].questionIndex} dif={params[0].dif} />
          ) : (
            <Results />
          )
        ) : null
      ) : (
        <Params />
      )}
    </div>
  );
};

export default App;