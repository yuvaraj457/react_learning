const { todo, status } = require("../Action/actionType")



initialState = {
    
}

 const todoReducer = (state=initialState, action) => {
     console.log(action)
    switch (action.type){
        case todo : {
            return {
                data : action.payload
            }
        }
        case status : {
            return {
                status : action.payload
            }
        }
        default :{
            return state
        }
    }
}

module.exports = todoReducer