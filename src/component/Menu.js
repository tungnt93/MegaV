import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconE from 'react-native-vector-icons/EvilIcons';
import IconI from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import styles from '../assets/style/Style';

export default class Menu extends Component{
    constructor(props){
        super(props);
        // console.log(this.props.user);
    }

    render(){
        return(
            <View style={{flex:1, backgroundColor:'#3d3d3d', paddingVertical: 30}}>
                <ScrollView style={{flex: 1}}>
                <View style={stylesMenu.hotline}>
                    <View style={{flex: 6, flexDirection:'row', alignItems:'center'}}>
                        <Icon name='phone' style={[styles.textWhite, styles.textLarge]}/>
                        <Text style={[styles.textWhite, styles.textLarge,{marginLeft: 5}]}>Hotline: </Text>
                        <Text style={[styles.textWhite, styles.textLarge, styles.textBold]}>19006470</Text>
                    </View>
                    <TouchableOpacity style={{flex: 1}}  onPress={()=>this.props.navigation.navigate('DrawerClose')}>
                        <IconE name='close' style={[styles.textWhite]} size={40}/>
                    </TouchableOpacity>
                </View>
                <View style={stylesMenu.borderBottom}>
                    <View style={{flexDirection:'row', paddingLeft: 20, alignItems:'center', paddingVertical: 15}}>
                        <Image source={require('../assets/image/avatar-default.png')} style={{width: 60, height: 60, borderRadius: 60}}/>
                        <Text style={[styles.textBig, styles.textWhite,{marginLeft: 10}]}>01666202390</Text>
                    </View>
                    <View style={{flexDirection:'row', paddingLeft: 20, alignItems:'center'}}>
                        <Text style={[styles.textMenu, styles.textLarge]}>Số dư khả dụng: </Text>
                        <Text style={[styles.textGreen, styles.textLarge]}>0 đ</Text>
                    </View>
                    <View style={{flexDirection:'row', paddingLeft: 20, alignItems:'center', marginTop: 2}}>
                        <Text style={[styles.textMenu, styles.textLarge]}>Số dư tạm giữ: </Text>
                        <Text style={[styles.textGreen, styles.textLarge]}>0 đ</Text>
                    </View>
                </View>
                <TouchableOpacity>
                    <Text style={stylesMenu.itemMenu}>Khuyến mại</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={stylesMenu.itemMenu}>Lịch sử giao dịch</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={stylesMenu.itemMenu}>Biến động số dư</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={stylesMenu.itemMenuGreen}>Giao dịch</Text>
                </TouchableOpacity>
                <View style={stylesMenu.rowTransaction}>
                    <TouchableOpacity style={stylesMenu.itemTransaction}>
                        <Text style={stylesMenu.textTransaction}>Nạp tiền</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={stylesMenu.itemTransaction}>
                        <Text style={[stylesMenu.textTransaction, stylesMenu.itemEven]}>Rút tiền</Text>
                    </TouchableOpacity>
                </View>
                <View style={stylesMenu.rowTransaction}>
                    <TouchableOpacity style={stylesMenu.itemTransaction}>
                        <Text style={stylesMenu.textTransaction}>Chuyển tiền</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={stylesMenu.itemTransaction}>
                        <Text style={[stylesMenu.textTransaction, stylesMenu.itemEven]}>Liên kết bank</Text>
                    </TouchableOpacity>
                </View>
                <View style={stylesMenu.rowTransaction}>
                    <TouchableOpacity style={stylesMenu.itemTransaction}>
                        <Text style={stylesMenu.textTransaction}>Nạp điện thoại</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={stylesMenu.itemTransaction}>
                        <Text style={[stylesMenu.textTransaction, stylesMenu.itemEven]}>Nạp tiền game</Text>
                    </TouchableOpacity>
                </View>
                <View style={stylesMenu.rowTransaction}>
                    <TouchableOpacity style={stylesMenu.itemTransaction}>
                        <Text style={stylesMenu.textTransaction}>Mua mã thẻ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={stylesMenu.itemTransaction}>
                        <Text style={[stylesMenu.textTransaction, stylesMenu.itemEven]}>Thanh toán</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <Text style={stylesMenu.itemMenu}>Quản trị tài khoản</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={stylesMenu.itemMenu}>Trung tâm hỗ trợ</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={stylesMenu.itemMenu}>Đăng xuất</Text>
                </TouchableOpacity>
                </ScrollView>
            </View>
        );
    }
}

const stylesMenu = StyleSheet.create({
    icon:{
        color: "#34495E", fontSize: 20
    },
    hotline:{
        flexDirection:'row',
        height: 60,
        borderBottomColor: '#494949',
        borderBottomWidth: 1,
        paddingVertical: 10,
        alignItems:'center',
        paddingLeft: 20
    },
    borderBottom:{
        borderBottomWidth: 1,
        borderBottomColor: '#494949',
        paddingBottom: 10
    },
    itemMenu:{
        fontSize: 18,
        color: '#bdbdbd',
        paddingLeft: 20,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#494949',
    },
    itemMenuGreen:{
        fontSize: 22,
        color: '#3d3d3d',
        paddingVertical: 10,
        backgroundColor: '#48b14a',
        textAlign: 'center'
    },
    rowTransaction:{
        borderBottomWidth: 1,
        borderBottomColor: '#494949',
        flexDirection:'row',
        backgroundColor: '#333333'
    },
    itemTransaction:{
        paddingVertical: 10,
        flex: 1,
    },
    textTransaction:{
        fontSize: 18,
        color: '#fff',
        textAlign:'center',
    },
    itemEven:{
        borderLeftWidth: 1,
        borderLeftColor: '#494949',
    }
});