const { todo, status } = require("./actionType")

exports.todoList = () => {
    return{
        type : todo,
        payload : 'Learn React'
    }
}

exports.statusList = () => {
    return {
        type : status,
        payload : 'Completed'
    }
}

// module.exports = [todoList, statusList]

