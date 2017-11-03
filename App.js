import React, { Component } from 'react';
import MyApp from './src/MyApp';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import SplashScreen from 'react-native-splash-screen';

export default class App extends Component<{}> {

    componentDidMount() {
        SplashScreen.hide();
    }
    render() {
          return (
              <Provider store={store}>
                  <MyApp />
              </Provider>
          );
    }
}

