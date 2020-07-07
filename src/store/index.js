import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './rootReducer'

export const history = require("history").createBrowserHistory()

export const store = createStore(rootReducer, applyMiddleware(thunk))