import { failure, fetchUser } from "../action/actionType"

const initialState = {
    userData : []
}

 export const rootReducer = (state=initialState, action) => {
    switch(action.type){
        case fetchUser:
            console.log(action.payload)
            return {
                userData : action.payload 
            }
        case failure:
            return{
                error : action.message
            }
    }
}

