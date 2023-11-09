import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getQuestions } from '../actions/question.action';
import { getParams } from '../actions/params.action';

const Params = () => {
    const dispatch = useDispatch()
    const [category,setCategory] = useState("")
    const [categoryName,setCategoryName] = useState("")
    const [nbQuestion,setNbQuestion] = useState("")
    const [difficulty,setDifficulty] = useState("")
    const [difficultyName,setDifficultyName] = useState("")


    const categories = [
        { key: "9", value: "Generale Knowledge" },
        { key: "15", value: "Video Games" },
        { key: "11", value: "Movie" },
        { key: "17", value: "Science & Nature" },
        { key: "21", value: "Sports" },
        { key: "22", value: "Geography" },
        { key: "23", value: "History" },
        { key: "27", value: "Animals" }
    ];

    const nbQuestions = [ "5","10","20"
    ]

    const difficulties = [
        { key: "easy", value: "Easy" },
        { key: "medium", value: "Medium" },
        { key: "hard", value: "Hard" },
    ]

    

    const handleCategorieChoose = (key,value) =>{

        setCategory(key)
        setCategoryName(value)
    }
    const handleNbQuestChoose = (ques) =>{

        setNbQuestion(ques)
    }
    const handleDifficultyChoose = (dif,value) =>{

        setDifficulty(dif)
        setDifficultyName(dif,value)
    }

    const handleGetQuestion = () =>{
        if (category && nbQuestion && difficulty){
            dispatch(getQuestions(category,nbQuestion,difficulty))
            dispatch(getParams(categoryName,nbQuestion,difficulty))
        } else{
            alert("Please choose a category, an amount of question and a difficulty before validate")
        }
        
    }


    return (
        <div className='params-page'>
            <div className="params-container">
                <label>Select Category :</label>
                <div className="params categorie">
                    {categories.map(cat => (
                        <div
                            className={`item ${category === cat.key ? 'selected' : ''}`}
                            key={cat.key}
                            onClick={() => handleCategorieChoose(cat.key, cat.value)}
                        >
                            {cat.value}
                        </div>
                    ))}
                </div>
            </div>
            <div className="params-container">
                <label>Number of questions :</label>
                <div className="params nb-question">
                    {nbQuestions.map(ques => (
                        <div
                            className={`item ${nbQuestion === ques ? 'selected' : ''}`}
                            onClick={() => handleNbQuestChoose(ques)}
                        >
                            {ques}
                        </div>
                    ))}
                </div>
            </div>
            <div className="params-container">
                <label>Level :</label>
                <div className="params dif">
                    {difficulties.map(dif => (
                        <div
                            className={`item ${difficulty === dif.key ? 'selected' : ''}`}
                            key={dif.key}
                            onClick={() => handleDifficultyChoose(dif.key, dif.value)}
                        >
                            {dif.value}
                        </div>
                    ))}
                </div>
            </div>
            <div className="btn" onClick={handleGetQuestion}>
                <div className="btn-text">Start the quizz</div> 
            </div>
        </div>
    );
};

export default Params;