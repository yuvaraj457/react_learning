import { failure, fetchUser } from "./actionType"
import axios from 'axios'

const data = user => {
    return {
        type : fetchUser,
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
