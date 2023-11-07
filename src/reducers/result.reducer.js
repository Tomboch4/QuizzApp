
import { UPDATE_POINT } from "../actions/result.action"


const initialState = {points : 0}

export default function pointsReducer(state = initialState,action){
    switch(action.type){
        case UPDATE_POINT :
            return {points:action.payload}
        default: return state
    }

}
