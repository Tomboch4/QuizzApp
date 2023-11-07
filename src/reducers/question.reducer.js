
import { GET_QUESTION } from "../actions/question.action"


const initialState = []

export default function questionReducer(state = initialState,action){
    switch(action.type){
        case GET_QUESTION :
            return [action.payload]
        default: return state
    }

}

