import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Platform, ScrollView, StatusBar, FlatList, Modal} from 'react-native';
import Icon from 'react-native-vector-icons/dist/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import { connect } from 'react-redux';
import * as actionCreator from '../../redux/actionCreators';

import { getItem } from '../../function/AsyncStorage';
import styles from '../../assets/style/Style';
import GuideTopup from './topup/GuideTopup';
import GuideWithdrawal from './withdrawal/GuideWithdrawal';
import GuideTransfers from './transfers/GuideTransfers';
import ItemImage from './ItemImage';

class Transaction extends Component<{}> {
    // static navigationOptions = {
    //     header: null
    // };

    constructor(props){
        super(props);
        this.state = {

        }
        this.arrItem = [
            {key: 1, navigator: 'TopupMenu', img: require('../../assets/image/nap-tien.png'), name: 'Nạp tiền', intro: <GuideTopup />},
            {key: 2, navigator: 'WithdrawalMenu', img: require('../../assets/image/rut-tien.png'), name: 'Rút tiền', intro: <GuideWithdrawal />},
            {key: 3, navigator: 'TopupMenu', img: require('../../assets/image/chuyen-tien.png'), name: 'Chuyển tiền', intro: <GuideTransfers />},
            {key: 4, navigator: 'TopupMenu', img: require('../../assets/image/lien-ket-bank.png'), name: 'Liên kết bank', intro: false},
            {key: 5, navigator: 'TopupMenu', img: require('../../assets/image/nap-dien-thoai.png'), name: 'Nạp điện thoại', intro: false},
            {key: 6, navigator: 'TopupMenu', img: require('../../assets/image/nap-game.png'), name: 'Nạp game', intro: false},
            {key: 7, navigator: 'TopupMenu', img: require('../../assets/image/mua-ma-the.png'), name: 'Mua mã thẻ', intro: false},
            {key: 8, navigator: 'TopupMenu', img: require('../../assets/image/thanh-toan.png'), name: 'Thanh toán', intro: false},
        ];
        console.log(this.props.showGuide);

    }

    render() {
        return (
            <View style={styles.container_dark}>
                <StatusBar backgroundColor="rgba(0, 0, 0, 0.2)" translucent={true}/>
                <View style={{flexDirection: 'row', justifyContent:'center'}}>
                    <TouchableOpacity
                        onPress={() => {this.props.navigation.navigate('DrawerOpen')}}
                        style={{flex: 1, justifyContent:'center'}}
                    >
                        <Text style={{backgroundColor:'#3d3d3d',  width: 50, paddingVertical: 8, textAlign:'center'}}>
                            <Icon name="menu" style={{color: '#fff', fontSize: 28}}/>
                        </Text>
                    </TouchableOpacity>
                    <View style={{alignItems:'center', flex: 5}}>
                        <Image style={styles.logo} source={require('../../assets/image/logo.png')}/>
                    </View>
                </View>
                <View style={styles.title}>
                    <Text style={styles.textTitle}>Giao dịch</Text>
                </View>
                <FlatList
                    style={{marginTop: 20, alignSelf: 'center', paddingHorizontal:10}}
                    data={this.arrItem}
                    renderItem = {({item})=>
                        <ItemImage
                            item = {item}
                            navigation = {this.props.navigation}
                        />
                    }
                    horizontal = {false}
                    numColumns = {2}
                />
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        showGuide: state.showGuide
    }
}

export default connect(mapStateToProps, actionCreator)(Transaction);