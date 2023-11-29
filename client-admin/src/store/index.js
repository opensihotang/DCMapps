import { applyMiddleware, legacy_createStore as createStore } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducer';

function logger(store) {
    return function firstInner(next) {
      return function secondInner(action) {
        console.group(action.type);
        console.info("dispatching", action);
        let result = next(action);
        console.log("next state", store.getState());
        console.groupEnd();
        return result;
      };
    };
  }

  const store = createStore( rootReducer, applyMiddleware(thunk));
  
  export default store