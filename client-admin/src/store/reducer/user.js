import {
    LOGIN_SUCCESS, LOGIN_LOADING,
    REGISTER_LOADING, REGISTER_SUCCESS
} from "../action/actionType"

const initialState = {
    dataUser : {},
    dataLoading : false
}

const userReducer = ( state = initialState, action ) => {
    // console.log(action.payload, "ini di reducer");
    switch (action.type){
        case LOGIN_SUCCESS : 
        return {
            ...state,
            dataUser : action.payload   
        }
        case LOGIN_LOADING :
            return {
                ...state,
                dataLoading : action.payload
            }
        case REGISTER_SUCCESS : 
            return {
                ...state,
                dataUser : action.payload   
        }
        case REGISTER_LOADING :
            return {
                ...state,
                dataLoading : action.payload
            }
        default :
            return state
    }
}

export default userReducer