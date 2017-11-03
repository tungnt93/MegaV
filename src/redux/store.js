import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import * as types from './types';
// import {showGuide} from "./actionCreators";

// const value = 0;

let arrShowGuide = {showGuideTopup: false, showGuideWithdrawal: false, showGuideTransfers:false};
let themeDark = {
    name: 'dark',
    logo: require('../assets/image/logo_dark.png'),
    Background: require('../assets/image/icon/dark/Background.png'),
    bgOpacity: 'rgba(51, 51, 51, 0.9)',
    bgColor: '#333',
    bgColorHome: 'rgba(0, 0, 0, 0)',
    bgColorItem: '#3d3d3d',
    bgColorSubItem: '#3a3a3a',
    bgColorItemChoose: '#fff',
    borderColor: '#555',
    bgButton: '#48b14a',
    textColor: '#ccc',
    textActive: '#dedede',
    textNotActive: '#999',
    textColorActive: '#48b14a',
    textBold: '#fff',
    colorHighlight: '#48b14a',
    icon:{
        account: require('../assets/image/icon/dark/account.png'),
        BrightMode: require('../assets/image/icon/dark/BrightMode.png'),
        Callcenter: require('../assets/image/icon/dark/Callcenter.png'),
        Card: require('../assets/image/icon/dark/Card.png'),
        CashIn: require('../assets/image/icon/dark/CashIn.png'),
        CashOut: require('../assets/image/icon/dark/CashOut.png'),
        ChangePhoneNumber: require('../assets/image/icon/dark/ChangePhoneNumber.png'),
        ConnectBank: require('../assets/image/icon/dark/ConnectBank.png'),
        Info: require('../assets/image/icon/dark/Info.png'),
        InvoicePayment: require('../assets/image/icon/dark/InvoicePayment.png'),
        Location: require('../assets/image/icon/dark/Location.png'),
        Logout: require('../assets/image/icon/dark/Logout.png'),
        Phone: require('../assets/image/icon/dark/Phone.png'),
        QNA: require('../assets/image/icon/dark/QNA.png'),
        ServicePayment: require('../assets/image/icon/dark/ServicePayment.png'),
        Shopping: require('../assets/image/icon/dark/Shoping.png'),
        TimeDeal: require('../assets/image/icon/dark/TimeDeal.png'),
        TransferMoney: require('../assets/image/icon/dark/TransferMoney.png'),
        Shield: require('../assets/image/icon/Shield.png'),
    }
};
let themeLight = {
    name:'light',
    logo: require('../assets/image/logo_dark.png'),
    Background: require('../assets/image/icon/light/Background.png'),
    bgColor: '#eee',
    bgOpacity: 'rgba(79, 184, 81, 0.6)',
    bgColorHome: 'rgba(79, 184, 81, 0.6)',
    bgColorItem: '#fff',
    bgColorSubItem: '#fdfdfd',
    bgColorItemChoose: '#666',
    borderColor: '#eee',
    bgButton: '#B14848',
    textColor: '#666',
    textActive: '#666',
    textNotActive: '#999',
    textColorActive: '#48b14a',
    textBold: '#333',
    colorHighlight: '#fff',
    icon:{
        account: require('../assets/image/icon/light/Account.png'),
        BrightMode: require('../assets/image/icon/light/BrightMode.png'),
        Callcenter: require('../assets/image/icon/light/Callcenter.png'),
        Card: require('../assets/image/icon/light/Card.png'),
        CashIn: require('../assets/image/icon/light/CashIn.png'),
        CashOut: require('../assets/image/icon/light/CashOut.png'),
        ChangePhoneNumber: require('../assets/image/icon/light/ChangePhoneNumber.png'),
        ConnectBank: require('../assets/image/icon/light/ConnectBank.png'),
        Info: require('../assets/image/icon/light/Info.png'),
        InvoicePayment: require('../assets/image/icon/light/InvoicePayment.png'),
        Location: require('../assets/image/icon/light/Location.png'),
        Logout: require('../assets/image/icon/light/Logout.png'),
        Phone: require('../assets/image/icon/light/Phone.png'),
        QNA: require('../assets/image/icon/light/QNA.png'),
        ServicePayment: require('../assets/image/icon/light/ServicePayment.png'),
        Shopping: require('../assets/image/icon/light/Shoping.png'),
        TimeDeal: require('../assets/image/icon/light/TimeDeal.png'),
        TransferMoney: require('../assets/image/icon/light/TransferMoney.png'),
        Shield: require('../assets/image/icon/Shield.png'),
    }
};
let currentTheme = themeDark;

let num= 0;
const showGuide = (state = arrShowGuide, action) =>{
    console.log('store show guide');
    console.log(action.name);
    if(action.type === types.SHOW_GUIDE){
        arrShowGuide = {showGuideTopup: false, showGuideWithdrawal: false, showGuideTransfers:false};
        switch (action.name){
            case 'showGuideTopup':
                console.log(11111);
                arrShowGuide.showGuideTopup = true;
                break;
            case 'showGuideWithdrawal':
                arrShowGuide.showGuideWithdrawal = true;
                break;
            case 'showGuideTransfers':
                arrShowGuide.showGuideTransfers = true;
                break;
            default:
                    break;
        }
        return arrShowGuide;
    }
    return state;
};

const setTheme = (state = themeLight, action) =>{
    if(action.type === types.SET_THEME){
        switch (action.name){
            case 'THEME_DARK':
                currentTheme = themeDark;
                return currentTheme;
            case 'THEME_LIGHT':
                currentTheme = themeLight;
                return currentTheme;
            case 'CHANGE_THEME':
                if(currentTheme === themeDark)
                    currentTheme = themeLight;
                else
                    currentTheme = themeDark;
                return currentTheme;
        }
    }
    return currentTheme;
};

let isLoading = false;
const showLoading = (state = isLoading, action)=>{
    if(action.type === types.SHOW_LOADING){
        if(action.name === 'SHOW') isLoading = true;
        else isLoading = false;
        return isLoading;
    }
    return isLoading;
};


const reducer = combineReducers({
    showGuide: showGuide,
    theme: setTheme,
    showLoading: showLoading
});

const store = createStore(reducer, applyMiddleware(thunk));
export default store;