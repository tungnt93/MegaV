import React, { Component } from 'react';
import {StackNavigator, TabNavigator, DrawerNavigator} from 'react-navigation';
import {StyleSheet, Text, View, StatusBar} from 'react-native';

import Main from './component/Main';
import Login from './component/Login';
import FirstSlide from './component/FirstSlide';
import VerifySms from './component/VerifySms';
import Menu from './component/Menu';

export const HomeStack = StackNavigator({
    Home: {
        screen: Main,
        navigationOptions:{
            title: 'MegaV'
        }
    }
});

export const LoginStack = StackNavigator({
    Login: {
        screen: Login,
        navigationOptions:{
            title: 'Đăng nhập'
        }
    },
    FirstSlide:{
        screen: FirstSlide,
        navigationOptions:{
            title: ''
        }
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

export const SideMenu = DrawerNavigator({
        LoginMenu:{
            screen: LoginStack
        },
        HomeMenu:{
            screen: HomeStack
        },
    },
    {
        drawerWidth: 300,
        drawerPosition: 'left',
        contentComponent: props => <Menu {...props} />
    }
);