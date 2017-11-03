
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, StatusBar } from 'react-native';
import {StackNavigator, TabNavigator, DrawerNavigator, addNavigationHelpers} from 'react-navigation';
import {Provider} from 'react-redux';
import store from './redux/store';

import DemoRedux from './component/example/DemoRedux';
import FirstSlide from './component/example/FirstSlide';
import Main from './component/example/Main';
import TouchIDAndroid from './component/example/TouchIDAndroid';
import QRCode from './component/example/QRCode';
import Socket_io from './component/example/Socket_io';
import Stepbystep from './component/example/Stepbystep';
import Contact from './component/example/Contact';
import Firebase from './component/example/Firebase';
import { connect } from 'react-redux';


import { MyTabs, AppNavigation } from './Route';
import { getItem } from './function/AsyncStorage';

export default class MyApp extends Component<{}> {
    constructor(props){
        super(props);
        this.isShowSlide = getItem('isShowSlide');
        this.state= ({
            bgColor: '#444'
        })
    }

    render() {
        return (
            <AppNavigation />
        );
    }
}

// function mapStateToProps(state) {
//     return {
//         showGuide: state.showGuide,
//         theme: state.theme,
//         num: state.num
//     }
// }
//
// export default connect(mapStateToProps)(MyApp);


