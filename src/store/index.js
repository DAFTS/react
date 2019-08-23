import { createStore , combineReducers , compose ,  applyMiddleware } from 'redux'

import thunk from 'redux-thunk'

import home from './modules/home'

const reducer = combineReducers({
    home
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)
));
