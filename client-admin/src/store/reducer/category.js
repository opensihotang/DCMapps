import { CATEGORY_SUCCESS, CATEGORY_LOADING } from "../action/actionType";

const initialState = {
    category : [],
    categoryLoading : false
}

const categoryReducer = ( state = initialState, action ) => {
    switch (action.type){
        case CATEGORY_SUCCESS : 
        return {
            ...state,
            category : action.payload   
        }
        case CATEGORY_LOADING :
            return {
                ...state,
                categoryLoading : action.payload
            }
        default :
            return state
    }
}

export default categoryReducer