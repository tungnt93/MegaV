
import React, { Component } from 'react';
import {Text, View, FlatList, TouchableOpacity, Dimensions, StyleSheet, Image, ScrollView, TextInput } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/dist/SimpleLineIcons';
import IconO from 'react-native-vector-icons/dist/Octicons';
import Header from '../../Header';
import styles from '../../../assets/style/Style';

const width = Dimensions.get('window').width;

class ItemBank extends Component<{}>{
    constructor(props){
        super(props);
        this.state = {
            idBank: 0,
        }
    }
    render(){
        return(
            <TouchableOpacity
                key={this.props.item.id}
                onPress={()=>this.setState({idBank: this.props.item.id})}
                style={[styles.row, {height: 50, backgroundColor: this.state.idBank === this.props.item.id ? this.props.theme.bgColorItemChoose :this.props.theme.bgColorSubItem, borderColor: this.props.theme.borderColor}]}>
                <View style={{flexDirection:'row', flex: 1,}}>
                    <View style={{width: 60, alignItems:'center'}}>
                        <Image
                            style={{width: this.props.item.width, height: this.props.item.height, resizeMode:'stretch'}}
                            source={this.state.idBank === this.props.item.id ? this.props.item.logoActive : this.props.item.logo}
                        />
                    </View>
                    <Text style={[styles.textNormal, styles.textLight, {marginLeft: 6, color: this.state.idBank === this.props.item.id ? this.props.theme.textNotActive : this.props.theme.textActive}]}>{this.props.item.name}</Text>
                </View>
                <Text style={[styles.textSmall, styles.textLight, {flex: 1, textAlign:'right', color: this.props.theme.textNotActive}]}>{this.props.item.fee}</Text>
            </TouchableOpacity>
        )
    }
}
class CashIn extends Component<{}> {
    constructor(props){
        super(props);
        this.state = {
            money: '',
            idBank: 0,
            showConnectBank: false,
            arrNoti: [
                {id: 1, title: 'Thông báo về các giao dịch, tin tức khuyến mãi, abc abc bac bac', time: '1 giây trước', img: null},
                {id: 1, title: 'Thông báo về các giao dịch, tin tức khuyến mãi, abc abc bac bac', time: '1 giây trước', img: 'http://www.webpage-maker.com/guide/files/200821911435669_2.jpg'},
            ]
        };
        console.log('cash in load');
        this.arrItemBank = [
            {id: 1, height: 21, width: 60, name: 'Vietcombank', fee: 'Miễn phí', logo: require('../../../assets/image/bank/vietcombank.png'), logoActive: require('../../../assets/image/bank/vietcombank_active.png')},
            {id: 2, height: 15, width: 48, name: 'BIDV', fee: 'Phí 1000 + 1.2%', logo: require('../../../assets/image/bank/bidv.png'), logoActive: require('../../../assets/image/bank/bidv_active.png')},
            {id: 3, height: 15, width: 60, name: 'VietinBank', fee: 'Phí 1200 + 1.2%', logo: require('../../../assets/image/bank/vietinbank.png'), logoActive: require('../../../assets/image/bank/vietinbank_active.png')},
        ];
    }



    render() {
        return (
            <View style={{flex: 1, backgroundColor: this.props.theme.bgColor}}>
                <Header title='Nạp tiền' left={true} navigation={this.props.navigation}/>
                <View style={{flex: 1, backgroundColor: this.props.theme.bgColor}}>
                    <ScrollView>
                        <View style={[styles.row, {backgroundColor: this.props.theme.bgColorItem, justifyContent:'flex-start',
                            borderColor: this.props.theme.borderColor}]}>
                            <Text style={[styles.textNormal, {color: this.props.theme.textActive}]}>Số tiền nạp(đ)</Text>
                            <View style={{flex: 1, flexDirection: 'row', borderColor: this.props.theme.borderColor, borderBottomWidth: 1}}>
                                <TextInput
                                    value={this.state.money}
                                    onChangeText={(money)=>this.setState({money})}
                                    style={[styles.textLarge, styles.textGreen, {flex: 1, paddingVertical: -6, textAlign:'right'}]}
                                    underlineColorAndroid='transparent'
                                    keyboardType='numeric'
                                />
                                <Text style={[styles.textLarge, styles.textGreen]}>.000</Text>
                            </View>
                        </View>

                        <Text style={[styles.textNormal, styles.textLight, {color: this.props.theme.textNotActive, padding: 10, paddingTop: 15}]}>PHƯƠNG THỨC NẠP</Text>
                        <TouchableOpacity
                            onPress={()=>this.setState({showConnectBank: !this.state.showConnectBank})}
                            style={[styles.row, {backgroundColor: this.props.theme.bgColorItem, borderColor: this.props.theme.borderColor}]}>
                            <View style={[styles.rowView, styleCashIn.itemPadding]}>
                                <Text style={[styles.textNormal, {color: this.props.theme.textBold}]}>Tài khoản ngân hàng liên kết</Text>
                            </View>
                            <View style={styles.rowRight}>
                                <Icon name='arrow-right' style={{fontSize: 16, color: this.props.theme.textColor}}/>
                            </View>
                        </TouchableOpacity>
                        {this.state.showConnectBank ?
                            <View>
                                {this.arrItemBank.map(item=> {return this.itemBank(item)})}

                                <View style={[styles.row,
                                    {backgroundColor: this.props.theme.bgColorSubItem, borderColor: this.props.theme.borderColor, justifyContent:'flex-start'}]}>
                                    <Text style={[styles.textLink, styles.textNormal,styleCashIn.itemPadding]}>+ Liên kết Bank</Text>
                                </View>
                            </View>
                            : null}


                        <View style={[styles.row, {backgroundColor: this.props.theme.bgColorItem, borderColor: this.props.theme.borderColor}]}>
                            <View style={[styles.rowView, styleCashIn.itemPadding]}>
                                <Text style={[styles.textNormal, {color: this.props.theme.textBold}]}>Tài khoản không liên kết</Text>
                            </View>
                            <View style={styles.rowRight}>
                                <Icon name='arrow-right' style={{fontSize: 16, color: this.props.theme.textColor}}/>
                            </View>
                        </View>
                        <TouchableOpacity
                            onPress={()=>this.setState({idBank: 4})}
                            style={[styles.row, {height: 50, backgroundColor: this.state.idBank === 4 ? this.props.theme.bgColorItemChoose :this.props.theme.bgColorSubItem, borderColor: this.props.theme.borderColor}]}>
                            <Text style={[styles.textNormal, styles.textLight, {color: this.state.idBank === 4 ? this.props.theme.textNotActive : this.props.theme.textActive}]}>Thẻ ATM / Tài khoản ngân hàng</Text>
                            <Text style={[styles.textSmall, styles.textLight, {flex: 1, textAlign:'right', color: this.props.theme.textNotActive}]}>Phí 1.500 + 1.2%</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={()=>this.setState({idBank: 5})}
                            style={[styles.row, {height: 50, backgroundColor: this.state.idBank === 5 ? this.props.theme.bgColorItemChoose :this.props.theme.bgColorSubItem, borderColor: this.props.theme.borderColor}]}>
                            <Text style={[styles.textNormal, styles.textLight, {color: this.state.idBank === 5 ? this.props.theme.textNotActive : this.props.theme.textActive}]}>Thẻ ATM / Tài khoản ngân hàng</Text>
                            <Text style={[styles.textSmall, styles.textLight, {flex: 1, textAlign:'right', color: this.props.theme.textNotActive}]}>Phí 1.500 + 1.2%</Text>
                        </TouchableOpacity>


                        <View style={[styles.row, {backgroundColor: this.props.theme.bgColorItem, borderColor: this.props.theme.borderColor}]}>
                            <View style={[styles.rowView, styleCashIn.itemPadding]}>
                                <Text style={[styles.textNormal, {color: this.props.theme.textBold}]}>Qua tài khoản ngân hàng của EPAY</Text>
                            </View>
                            <View style={[styles.rowRight, {flex: 1}]}>
                                <Icon name='arrow-right' style={{fontSize: 16, color: this.props.theme.textColor}}/>
                            </View>
                        </View>
                    </ScrollView>
                    <TouchableOpacity style={{padding: 10}}>
                        <Text style={[styles.buttonTextFull]}>NẠP TIỀN</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    itemBank(item){
        return(
            <TouchableOpacity
                key={item.id}
                onPress={()=>this.setState({idBank: item.id})}
                style={[styles.row, {height: 50, backgroundColor: this.state.idBank === item.id ? this.props.theme.bgColorItemChoose :this.props.theme.bgColorSubItem, borderColor: this.props.theme.borderColor}]}>
                <View style={{flexDirection:'row', flex: 1,}}>
                    <View style={{width: 60, alignItems:'center'}}>
                        <Image
                            style={{width: item.width, height: item.height, resizeMode:'stretch'}}
                            source={this.state.idBank === item.id ? item.logoActive : item.logo}
                        />
                    </View>
                    <Text style={[styles.textNormal, styles.textLight, {marginLeft: 6, color: this.state.idBank === item.id ? this.props.theme.textNotActive : this.props.theme.textActive}]}>{item.name}</Text>
                </View>
                <Text style={[styles.textSmall, styles.textLight, {flex: 1, textAlign:'right', color: this.props.theme.textNotActive}]}>{item.fee}</Text>
            </TouchableOpacity>
        )
    }

}

const styleCashIn = StyleSheet.create({
    itemPadding:{
        paddingVertical: 6
    }
});

function mapStateToProps(state) {
    return {
        theme: state.theme,
    }
}

// connect(mapStateToProps)(ItemBank);
export default connect(mapStateToProps)(CashIn);


