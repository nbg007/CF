import {createStore} from 'redux'
import {syncHistoryWithStore} from 'react-router-redux'
import {browserHistory} from 'react-router'

import rootReducer from './reducers/index'

import comments from './api/comments'
import posts from './api/posts'

const defaultState = {
    posts,
    comments,
}

const store = createStore(rootReducer, defaultState)

export const history = syncHistoryWithStore(browserHistory, store)

export default store