import {
  ITEMS_SUCCESS,
  ITEMS_LOADING,
  ITEM_SUCCESS,
  ITEM_LOADING,
} from "../action/actionType";

const initialState = {
  item: {},
  items: [],
  itemLoading: false,
  itemsLoading: false,
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ITEMS_SUCCESS:
      return {
        ...state,
        items: action.payload,
      };
    case ITEMS_LOADING:
      return {
        ...state,
        itemsLoading: action.payload,
      };
    case ITEM_SUCCESS:
      return {
        ...state,
        item: action.payload,
      };
    case ITEM_LOADING:
      return {
        ...state,
        itemLoading: action.payload,
      };
    default:
      return state;
  }
};

export default itemReducer;
