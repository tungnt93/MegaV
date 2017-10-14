import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/SimpleLineIcons';
import { getItem } from '../object/AsyncStorage';

export default class Login extends Component<{}> {
    constructor(props){
        super(props);
        this.state = {}
    }

    componentWillMount(){
        let isShowSlide = getItem('isShowSlide');
        if(!isShowSlide){
            this.props.navigation.navigate('FirstSlide')
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('HomeMenu')}}>
                    <Text style={styles.buttonText}>Trang chủ</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('VerifySms')}}>
                    <Text style={styles.buttonText}>Xác minh SĐT</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('HomeMenu')}}>
                    <Text style={styles.buttonText}>Quên mật khẩu</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('HomeMenu')}}>
                    <Text style={styles.buttonText}>Đăng ký</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent:'space-between',
        alignItems:'center',
        paddingVertical: 100
    },
    buttonText:{
        padding: 10,
        backgroundColor: '#28ABE3',
        color: '#fff',
        fontSize: 20
    }
});