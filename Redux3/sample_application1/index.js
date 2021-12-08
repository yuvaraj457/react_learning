const {todoList, statusList} = require('./Action/action')
const store = require("./Store");

console.log('Initial State', store.getState())

const unsubscribe = store.subscribe(() =>
  console.log('State after dispatch: ', store.getState())
)

store.dispatch(todoList())
store.dispatch(statusList())

unsubscribe()
