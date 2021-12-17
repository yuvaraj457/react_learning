import { error, searchTerm, user } from "../action/actionTypes"

const initialState = {
    userData : [],
    searchTerm : ''
}

export const userReducer = (state= initialState, action) => {
    switch(action.type){
        case user:
            return{
                userData : action.payload
            }
        case searchTerm:
            return {
                ...state,
                searchTerm : action.payload
            }
        case error:
            return{
                error : error.message
            }
        default:
            return{
                ...state
            }
    }
}