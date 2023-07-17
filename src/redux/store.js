import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './rootReducers';

const bindMiddlewares = (middleware) => {
	if (process.env.NODE_ENV !== 'production')
		return composeWithDevTools(applyMiddleware(middleware));
	return applyMiddleware(middleware);
};

const store = (initialState) => createStore(reducers, initialState, bindMiddlewares(thunk));

export default store;