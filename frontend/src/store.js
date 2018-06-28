import {createStore,compose,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import reducer from './reducer/index';

const initializeState = {
    user : {
    },
    feed : {
        discussions : [],
        nowPage : 1,
    }
}
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// const store = createStore(
//     reducer,
//     initializeState,
//     compose(applyMiddleware(thunk,createLogger()),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// )
const store = createStore(
    reducer,
    initializeState,
    compose(applyMiddleware(thunk))
)
export default store;