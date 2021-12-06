import { failure, fetchUser, fetchUserById } from "./actionType"
import axios from 'axios'

const data = user => {
    return {
        type : fetchUser,
        payload : user
    }
}

const dataById = user => {
    return {
        type : fetchUserById,
        payload : user
    }
}

const failureMessage = error => {
    return {
        type : failure,
        message : error
    }
} 

export  const fetchUserData = (dispatch) => {
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/users/')
            .then((res) => {
                const users = res.data
                dispatch(data(users));
            })
            .catch((error) => {
                dispatch(failureMessage(error))
            })
    }
}

export  const fetchUserDataById = (id, dispatch) => {
    return (dispatch) => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id && id}`)
            .then((res) => {
                const users = res.data
                dispatch(dataById(users));
            })
            .catch((error) => {
                dispatch(failureMessage(error))
            })
    }
}
