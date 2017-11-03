import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList} from 'react-native';
import io from "react-native-socket.io-client";
import PushNotification from 'react-native-push-notification';

var self;
export default class Socket_io extends Component<{}> {
    constructor(props){
        super(props);
        self = this;
        this.state = {
            messages: [],
            text: ''
        }
        PushNotification.configure({
            onNotification: function(notification) {
                console.log( 'NOTIFICATION:', notification );
            },
        });
        this.socket = io.connect('http://10.0.2.2:3000/', {jsonp: false});
        this.onListenerSocket();
        console.ignoredYellowBox = ['Setting a timer'];
    }

    onListenerSocket(){
        this.socket.on('SERVER_SEND_MESSAGE', function (message) {
            let arr = self.state.messages;
            arr.push(message);
            self.setState({
                messages: arr
            });
            console.log(new Date(Date.now() + 1000));
            PushNotification.localNotificationSchedule({
                message: message, // (required)
                date: new Date(Date.now()),
                // date: new Date()
            });
            // self.pushNoti(message);
        });
    }

    pushNoti(message){
        PushNotification.localNotificationSchedule({
            message: message, // (required)
            date: new Date(Date.now())
            // date: new Date()
        });
    }

    send(){
        this.socket.emit('CLIENT_SEND_MESSAGE', this.state.text);
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.messages}
                    extraData={this.state}
                    keyExtractor={(item, index) => index}
                    style={{marginTop: 12}}
                    renderItem={({item}) =>
                        <Text>{item}</Text>
                    }
                />
                <TextInput
                    placeholder = "Nhập dữ liệu"
                    onChangeText={(text) => this.setState({text})} value={this.state.text}
                />
                <TouchableOpacity onPress={this.send.bind(this)}>
                    <Text style={styles.buttonText}>Gửi</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    buttonText:{
        padding: 10,
        backgroundColor: '#28ABE3',
        color: '#fff',
        fontSize: 20,
        textAlign: 'center'
    }
});