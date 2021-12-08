const { createStore, applyMiddleware } =  require("redux")
const thunk = require("redux-thunk").default
const todoReducer = require('../Reducer/todoReducer')

const store = createStore(todoReducer, applyMiddleware(thunk))

module.exports = store