
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, StatusBar } from 'react-native';
import {TabNavigator, StackNavigator, DrawerNavigator} from 'react-navigation';
import store from './redux/store';
import { connect } from 'react-redux';
import IconS from 'react-native-vector-icons/dist/SimpleLineIcons';
import IconO from 'react-native-vector-icons/dist/Octicons';

// import {Route} from './Route';
import { getItem } from './function/AsyncStorage';

import Login from './component/account/Login';
import Register from './component/account/Register';
import ResetPassword from './component/account/ResetPassword';
import TouchIDAndroid from './component/account/auth/TouchIDAndroid';
import TouchIDiOS from './component/account/auth/TouchIDiOS';
import FirstSlide from './component/guide/FirstSlide';
import VerifySms from './component/example/VerifySms';

import Home from './component/home/Home';
import Notification from './component/home/Notification';
import CashIn from './component/home/cashIn/CashIn';
import Gift from './component/gift/Gift';
import History from './component/history/History';
import User from './component/user/User';
import TabComponent from './TabComponent';

const HomeStack = StackNavigator({
    Home: {
        screen: Home,
        navigationOptions:{
            title: null,
            header: null
        }
    },
    Notification:{
        screen: Notification,
        navigationOptions:{
            title: null,
            header:null
        }
    },
    CashIn:{
        screen: CashIn,
        navigationOptions:{
            title: null,
            header:null
        }
    },
});

const GiftStack = StackNavigator({
    Gift: {
        screen: Gift,
        navigationOptions:{
            title: 'MegaV',
            header: null
        }
    }
});

const HistoryStack = StackNavigator({
    History: {
        screen: History,
        navigationOptions:{
            title: 'MegaV',
            header: null
        }
    }
})

const UserStack = StackNavigator({
    User: {
        screen: User,
        navigationOptions:{
            title: 'MegaV',
            header: null
        }
    }
});

const LoginStack = StackNavigator({
    Login: {
        screen: Login,
        navigationOptions:{
            title: 'Đăng nhập'
        }
    },
    Register: {
        screen: Register,
        navigationOptions:{
            title: 'Đăng ký'
        }
    },
    ResetPassword:{
        screen: ResetPassword,
        navigationOptions:{
            title:'Lấy lại mật khẩu'
        }
    },
    FirstSlide:{
        screen: FirstSlide,
        navigationOptions:{
            title: ''
        }
    },
    TouchIDAndroid: {
        screen: TouchIDAndroid
    },
    TouchIDiOS: {
        screen: TouchIDiOS
    },
    VerifySms:{
        screen: VerifySms,
        navigationOptions:{
            title: 'Xác minh số điện thoại'
        }
    }
},{
    headerMode: 'screen'
});

const TabRoute = {
    HomeTab:{
        screen: HomeStack,
    },
    GiftTab:{
        screen: GiftStack,
    },
    HistoryTab:{
        screen: HistoryStack,
    },
    UserTab:{
        screen: UserStack,
    },
};

const TabConfig = {
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
    tabBarComponent: props => <TabComponent {...props}/>

};

export const MyTabs = TabNavigator(TabRoute, TabConfig);

export const AppNavigation =  StackNavigator({
    NavLogin: {
        screen: LoginStack
    },
    NavTabs:{
        screen: MyTabs
    },
});