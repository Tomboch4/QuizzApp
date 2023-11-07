import { combineReducers } from "redux";
import questionReducer from "./question.reducer";
import paramsReducer from "./params.reducer";
import pointsReducer from "./result.reducer";

export default combineReducers ({
    questionReducer,
    paramsReducer,
    pointsReducer
})