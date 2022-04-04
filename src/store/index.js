import { createStore, combineReducers, applyMiddleware } from 'redux';
import {reducer} from './reducer.js';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    data: reducer,
})
export const store = createStore(rootReducer, applyMiddleware(thunk));