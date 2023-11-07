
import axios from "axios";
import he from "he"

export const GET_QUESTION = "GET_QUESTION"

export const getQuestions = (cat,nb,dif) =>{
    return (dispatch) =>{
        axios.get(`https://opentdb.com/api.php?amount=${nb}&category=${cat}&difficulty=${dif}&type=multiple`).then(res =>{
        const processedQuestions = res.data.results.map(processQuestion)
        dispatch({type:GET_QUESTION,payload:processedQuestions})
        })
    }
    function processQuestion(question) {
        const decodedQuestion =  he.decode(question.question)
        const answers = [question.correct_answer,...question.incorrect_answers]

        const shuffledAnswers = []
        while (answers.length > 0) {
            const randomIndex = Math.floor(Math.random() * answers.length);
            shuffledAnswers.push(answers[randomIndex]);
            answers.splice(randomIndex, 1);
          }
        return {
            question: decodedQuestion,
            correctAnswer: question.correct_answer,
            answers: shuffledAnswers
        }
    }
}
