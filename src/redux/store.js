import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers'
import reducers from './reducers'

const logger = createLogger()
const navMiddleware = createReactNavigationReduxMiddleware(state => state.nav)
const middleware = applyMiddleware(thunk, navMiddleware, logger)
const store = createStore(reducers, middleware)

export default store