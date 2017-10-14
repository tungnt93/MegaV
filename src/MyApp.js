
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import DemoRedux from './component/DemoRedux';
import FirstSlide from './component/FirstSlide';
import Main from './component/Main';
import TouchIDAndroid from './component/TouchIDAndroid';
import QRCode from './component/QRCode';
import ImageFull from './component/ImageFull';
import {SideMenu} from './Route';
import {Provider} from 'react-redux';
import store from './redux/store';
import { getItem } from './object/AsyncStorage';

export default class MyApp extends Component<{}> {
    constructor(props){
        super(props);
        this.isShowSlide = getItem('isShowSlide');
    }

    render() {
        // if(this.isShowSlide){
        //     return (
        //         <Provider store={store}>
        //             <FirstSlide />
        //         </Provider>
        //     );
        // }
        // else{
        //     return (
        //         <Provider store={store}>
        //             <Main/>
        //         </Provider>
        //     );
        // }

        return (
            <Provider store={store}>
                <SideMenu />
            </Provider>
        );
    }
}


