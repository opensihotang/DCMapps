import { 
        ITEMS_LOADING,
        ITEMS_SUCCESS,
        ITEM_LOADING,
        ITEM_SUCCESS } from "../action/actionType";

const initialState = {
    items : [],
    item : {},
    itemsLoading : false
}

const itemReducer = (state = initialState, action) => {
    switch (action.type){
        case ITEMS_SUCCESS :
            return {
                ...state,
                items : action.payload
            }
        case ITEMS_LOADING :
            return {
                ...state,
                itemsLoading : action.payload
            }
        case ITEM_SUCCESS :
            return {
                ...state,
                item : action.payload
            }
        case ITEM_LOADING :
            return {
                ...state,
                itemsLoading : action.payload
            }
        default :
            return state
    }
}

export default itemReducer 
   