import { applyMiddleware, createStore } from "redux";
import quoteReducer from "./reducer";
import ReduxThunk from 'redux-thunk'


const store = createStore(quoteReducer, applyMiddleware(ReduxThunk));

window.store = store;

export default store;