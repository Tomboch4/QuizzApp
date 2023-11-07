export const GET_PARAMS = "GET_PARAMS"
export const UPDATE_INDEX = "UPDATE_INDEX"

export const getParams= (cat,nb,dif) =>{
    return (dispatch) =>{
       const parms = {
            cat: cat,
            nb: nb,
            dif: dif,
            questionIndex: 0
        }
        dispatch({type:GET_PARAMS,payload:parms})
    }
}

export const modifyParams= (newIndex) =>{
    return (dispatch) =>{
        dispatch({type:UPDATE_INDEX,payload:newIndex})
    }
}