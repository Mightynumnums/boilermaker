import { createStore, applyMiddleware } from 'redux';
import yourReducer from './yourReducer';
import thunkMiddleWare from 'redux-thunk';
import { createLogger } from 'redux-logger';

const store = createStore(
    yourReducer,
    applyMiddleware(
        thunkMiddleWare,
        createLogger()
    )
);


export default store;