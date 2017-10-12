
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import DemoRedux from './component/DemoRedux';
import FirstSlide from './component/FirstSlide';
import Main from './component/Main';
import TouchIDAndroid from './component/TouchIDAndroid';
import QRCode from './component/QRCode';
import {Provider} from 'react-redux';
import store from './redux/store';

export default class MyApp extends Component<{}> {
    render() {
        return (
            <Provider store={store}>
                <QRCode />
            </Provider>
        );
    }
}


