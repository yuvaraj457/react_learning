import { fetchFailed, todoData, todoLoading } from "../Action/actionTypes"


const initialState = {
     status : '',
     data   :   []
} 

export const todoReducer = (state = initialState, action) => {
    switch(action.type) {
        case todoLoading:
            return {
                ...state,
                status : action.status
            }
        case todoData:
            return {
                ...state,
                status : action.status,
                data : action.payload
            }
        case fetchFailed:
            return {
                status : '',
                error : action.errorMessage
            }
        default:
            return state
    }
}