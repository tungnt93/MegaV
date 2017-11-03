import * as types from './types';

export function actionIncrement() {
    return {type: types.INCREMENT}
}

//xu ly dong bo
export function decrement() {
    return {type: types.DECREMENT}
}

//xu ly bat dong bo
export function increment() {
    return dispatch => {
        dispatch(actionIncrement());
    }
}

export function actionShowGuide(name) {
    console.log('action show guide');
    return {
        type: types.SHOW_GUIDE,
        name: name
    }
}

export function changeNum() {
    return {type: 'CHANGE'}
}

export function setTheme(name){
    return {
        type: types.SET_THEME,
        name: name
    }
}

export function showLoading(name) {
    return{
        type: types.SHOW_LOADING,
        name
    }
}

export function showGuideTopup() {
    return {type: types.SHOW_GUIDE_TOPUP}
}

export function showGuideWithdrawal() {
    return {type: types.SHOW_GUIDE_WITHDRAWAL}
}

export function showGuideTransfers() {
    return {type: types.SHOW_GUIDE_TRANSFERS}
}