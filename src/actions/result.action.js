
export const UPDATE_POINT = "UPDATE_POINT"

export const updatePoints = (points) =>{
    return (dispatch) =>{
        dispatch({type:UPDATE_POINT,payload:points})
        }
    }

