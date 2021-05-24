import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import reducer from '../reducers/index'

let store;

export function configureStore(){
    store = createStore(reducer,applyMiddleware(thunk,logger));
    return store;
}
// git commit -m "Setup basic directory structure, added prettier, added store and reducer"