import { combineReducers } from 'redux'
import { reducer as movies } from './movies'

export const reducers = combineReducers({
    movies
    // more reducers go here
})