import { fetchFailed, todoData, todoLoading } from "./actionTypes"
import axios from 'axios'

 const todoLoadingAction = () => {
    return {
        type : todoLoading,
        status : 'Loading...'
    }
}

 const todoDataAction = task => {
    return {
        type : todoData,
        status : 'Loaded',
        payload : task
    }
}

 const todoErrorAction = error => {
    return {
        type : fetchFailed,
        errorMessage : error
    }
}

export const fetchTodos = () => async dispatch => {
    dispatch(todoLoadingAction())
    try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
         dispatch(todoDataAction(response.data))
    }
    catch(error) {
        dispatch(todoErrorAction(error))
    }
}