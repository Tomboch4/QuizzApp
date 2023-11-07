
import { GET_PARAMS,UPDATE_INDEX } from "../actions/params.action"


export default function paramsReducer(state = null,action){
    switch(action.type){
        case GET_PARAMS :
            return [action.payload]
        case UPDATE_INDEX :
            return [{...state[0],questionIndex:action.payload}]
        default: return state
    }

}
