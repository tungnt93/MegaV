import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import * as types from './types';

const value = 0;

const changeValue = (state = 0, action) => {
    console.log(11111);
    if(action.type === 'INCREMENT'){
        state += 1;
        return state++;
    }
    else if(action.type === types.DECREMENT){
        state -= 1;
        return state;
    }
    return state;
};

const reducer = combineReducers({
    changeValue: changeValue
});

const store = createStore(reducer, applyMiddleware(thunk));
export default store;