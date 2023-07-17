import { legacy_createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import reducers from './rootReducers';

const store = (initialState) => legacy_createStore(reducers, initialState, applyMiddleware(thunk));

export default store;