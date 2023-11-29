import { combineReducers } from "redux";
import itemReducer  from "./item"
import categoryReducer from "./category";
import userReducer from "./user";

const rootReducer = combineReducers({
    items : itemReducer,
    category : categoryReducer,
    user : userReducer
})

export default rootReducer