import { failure, fetchUser, fetchUserById } from "../action/actionType"

const initialState = {
    userData : [],
    userDataById : []
}

 export const rootReducer = (state=initialState, action) => {
    switch(action.type){
        case fetchUser:
            return {
                ...initialState,
                userData : action.payload 
            }
        case fetchUserById:
            return {
                ...initialState,
                userDataById : action.payload 
            }
        case failure:
            return{
                error : action.message
            }
    }
}

