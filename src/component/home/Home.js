import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Platform, ScrollView, StatusBar, FlatList, Modal,
    Dimensions} from 'react-native';
import { NavigationActions } from 'react-navigation'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import { connect } from 'react-redux';
import * as actionCreator from '../../redux/actionCreators';

import { getItem } from '../../function/AsyncStorage';
import styles from '../../assets/style/Style';
import GuideTopup from '../transaction/topup/GuideTopup';
import GuideWithdrawal from '../transaction/withdrawal/GuideWithdrawal';
import GuideTransfers from '../transaction/transfers/GuideTransfers';
import Loading from '../Loading';
import Header from '../Header';
import Item from './Item';


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class Home extends Component<{}> {
    // static navigationOptions = {
    //     header: null
    // };

    constructor(props){
        super(props);
        this.state = {

        };
        this.arrItem = [
            {key: 1, navigator: 'CashIn', img: '', name: 'Nạp tiền', intro: <GuideTopup />},
            {key: 2, navigator: 'WithdrawalMenu', img: '', name: 'Rút tiền', intro: <GuideWithdrawal />},
            {key: 3, navigator: 'TopupMenu', img:'', name: 'Chuyển tiền', intro: <GuideTransfers />},
            {key: 4, navigator: 'TopupMenu', img: '', name: 'Điểm giao dịch', intro: false},
            {key: 5, navigator: 'TopupMenu', img: '', name: 'Liên kết bank', intro: false},
            {key: 6, navigator: 'TopupMenu', img: '', name: 'Nạp điện thoại', intro: false},
            {key: 7, navigator: 'TopupMenu', img: '', name: 'Thanh toán hóa đơn', intro: false},
            {key: 8, navigator: 'TopupMenu', img: '', name: 'Thanh toán dịch vụ', intro: false},
            {key: 9, navigator: 'TopupMenu', img: '', name: 'Mua sắm', intro: false},
        ];
        console.log('Home load');
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: this.props.theme.bgColor}}>
                <Header/>
                <View style={{flexDirection: 'row', justifyContent:'center', paddingTop: 30, backgroundColor: this.props.theme.bgColorHome}}>
                    <TouchableOpacity style={{flex: 1, justifyContent:'center'}}>
                        <Ionicons name="ios-search" style={{color: '#fff', fontSize: 28, textAlign:'center'}}/>
                    </TouchableOpacity>
                    <View style={{alignItems:'center', flex: 5}}>
                        <Image style={styles.logo} source={this.props.theme.logo}/>
                    </View>
                    <TouchableOpacity
                        onPress={()=>this.props.navigation.navigate('Notification')}
                        style={{flex: 1, justifyContent:'center', alignItems:'center', position:'relative'}}>
                        <Image
                            style={{width: 24, height: 24, resizeMode:'contain'}}
                            source={require('../../assets/image/icon/Bell.png')}
                        />
                        <Text style={{position:'absolute', color: '#000', fontSize: 12, paddingHorizontal: 5, borderRadius: 3,
                            backgroundColor:'#FED700', top: 8, right:25}}>8</Text>
                        {/*<Icon name="bell-o" style={{color: '#fff', fontSize: 25, textAlign:'center'}}/>*/}
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row', paddingLeft: 10, alignItems:'center', paddingBottom: 10, backgroundColor: this.props.theme.bgColorHome}}>
                    <View style={{flex: 4, flexDirection:'row', alignItems:'center',}}>
                        <Image source={require('../../assets/image/avatar-default.png')} style={{width: 60, height: 60, borderRadius: 60}}/>
                        <View style={{marginLeft: 10}}>
                            <Text style={[styles.textLarge, styles.textWhite]}>01666202390</Text>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={[styles.textNormal, styles.textMenu]}>Khả dụng: </Text>
                                <Text style={[styles.textNormal, {color: this.props.theme.colorHighlight}]}>1000.000.000 đ </Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={[styles.textNormal, styles.textMenu]}>Tạm giữ: </Text>
                                <Text style={[styles.textNormal, {color: this.props.theme.colorHighlight}]}>1000.000.000 đ </Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity style={{flex: 1}}>
                        <Ionicons name='ios-more' style={{color: '#fff', fontSize: 25, textAlign:'center'}}/>
                    </TouchableOpacity>
                </View>
                <FlatList
                    style={{alignSelf: 'center',backgroundColor: this.props.theme.bgColor, borderColor: this.props.theme.borderColor,borderTopWidth: 0.5}}
                    data={this.arrItem}
                    renderItem = {({item})=>
                        <Item
                            item = {item}
                            navigation = {this.props.navigation}
                        />
                    }
                    horizontal = {false}
                    numColumns = {3}
                />
                {/*<View style={{height: 80, backgroundColor: '#333'}}></View>*/}
                {/*<Loading/>*/}
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        showGuide: state.showGuide,
        theme: state.theme,
    }
}

export default connect(mapStateToProps, actionCreator)(Home);