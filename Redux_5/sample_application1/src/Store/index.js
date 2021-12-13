import {applyMiddleware, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'


import { todoReducer } from '../Reducer/todoReducer'


export const store = createStore(todoReducer, composeWithDevTools(applyMiddleware(thunk)))



