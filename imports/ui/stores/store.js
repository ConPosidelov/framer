import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers/root.reducer';


export const history = createHistory();
const historyMiddleware = routerMiddleware(history);

export const STORE = createStore (
    rootReducer, 
    composeWithDevTools(applyMiddleware(thunk, historyMiddleware))
);





