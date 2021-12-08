import { todoAdd } from "../Action/actionType"

const initialState = {
    todos : []
}

export const todoReducer = (state=initialState, action) => {
    switch(action.type) {
        case todoAdd: 
            return {
               todos : [...state.todos, action.payload]
            }
        default:
            return state
    }
}