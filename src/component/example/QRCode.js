// https://github.com/moaazsidat/react-native-qrcode-scanner/tree/master/examples
import React, { Component } from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    Navigator,
    TouchableOpacity,
    Linking,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';

export default class QRCode extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: ''
        }
    }
    onSuccess(e) {
        // Linking
        //     .openURL(e.data)
        //     .catch(err => console.error('An error occured', err));
        this.setState({
            data: e.data
        })
    }

    onReScanner(){
        this.setState({
            data: ''
        })
        this.scanner.reactivate();
    }

    render() {
        return (
            <QRCodeScanner
                onRead={this.onSuccess.bind(this)}
                topContent={(
                    <Text style={styles.centerText}>
                        {this.state.data}
                    </Text>
                )}
                ref={(node) => this.scanner = node}
                bottomContent={(
                    <TouchableOpacity style={styles.buttonTouchable} onPress={this.onReScanner.bind(this)}>
                        <Text style={styles.buttonText}>Try again!</Text>
                    </TouchableOpacity>
                )}
            />
        );
    }
}

const styles = StyleSheet.create({
    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777',
    },

    textBold: {
        fontWeight: '500',
        color: '#000',
    },

    buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)',
    },

    buttonTouchable: {
        padding: 16,
    },
});