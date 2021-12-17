import { error, searchTerm, user } from "./actionTypes"
import axios from 'axios'

const userData = (data) => {
    return {
        type : user,
        payload : data
    }
}

const failure = errorMessage => {
    return{
        type : error,
        message : errorMessage
    }
}

export const fetchUser = () => {
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/users/')
        .then(({data}) => dispatch(userData(data)))
        .catch(error => dispatch(failure(error)))
    }
}

export const search = (user) => {
    return {
        type : searchTerm,
        payload : user
    }
}