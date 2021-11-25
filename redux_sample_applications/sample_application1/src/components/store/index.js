import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../action/counterAction'

export default configureStore({
    reducer : {
        counter : counterReducer
    }
})