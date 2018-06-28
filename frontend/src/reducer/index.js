import {combineReducers} from 'redux'
import {user} from './user';
import {feed} from './feed';
import {discussion} from "./discussion";

const reducer = combineReducers({
    user,
    feed,
    discussion
})

export default reducer;