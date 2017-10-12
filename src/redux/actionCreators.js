import * as types from './types';

export function actionIncrement() {
    return {type: types.INCREMENT}
}

export function decrement() {
    return {type: types.DECREMENT}
}

export function increment() {
    return dispatch => {
        dispatch(actionIncrement());
    }
}