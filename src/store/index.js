import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import {reducer} from './reducer.js';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    data: reducer,
    form: formReducer
})
export const store = createStore(rootReducer, applyMiddleware(thunk));