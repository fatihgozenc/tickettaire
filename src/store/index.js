import { createStore, applyMiddleware, combineReducers } from 'redux'
import { user, tree } from './reducers'
import thunk from 'redux-thunk'

const store = createStore(
	combineReducers({ user, tree }),
	applyMiddleware(thunk)
)

export default store