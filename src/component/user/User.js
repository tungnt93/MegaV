import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Platform, ScrollView, StatusBar, FlatList, Modal,
    Dimensions, Switch} from 'react-native';
import Icon from 'react-native-vector-icons/dist/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import { connect } from 'react-redux';
import * as actionCreator from '../../redux/actionCreators';
import { getItem, setItem } from '../../function/AsyncStorage';
import styles from '../../assets/style/Style';
import Header from '../Header';
const width = Dimensions.get('window').width;

// class RowItem extends Component<{}>{
//     constructor(props){
//         super(props);
//         this.state = {
//
//         }
//     }
// }

class User extends Component<{}>{
    constructor(props){
        super(props);
        this.state = {
            valueTheme: this.props.theme.name === 'light'
        };
        this.arrItem = [
            {key: 2, navigator: 'TopupMenu', text: 'Tài khoản ngân hàng'},
            // {key: 3, navigator: 'TopupMenu', icon: 'shield', text: 'Quà tặng'},
            {key: 4, text: 'Hotline: 1900 6470', textRight: '08:30 - 22:00', margin: 20},
            {key: 5, navigator: 'TopupMenu', text: 'Thông tin liên hệ'},
            {key: 6, navigator: 'TopupMenu', text: 'Câu hỏi thường gặp'},
        ];
        console.log('User load');
    }

    componentWillMount(){

    }

    changeTheme(value){
        console.log('change theme: ' + value);
        this.setState({
            valueTheme: value
        });
        this.props.setTheme('CHANGE_THEME');
        setItem('theme', value ? 'THEME_LIGHT' : 'THEME_DARK', 'TEXT');
    }

    render(){
        return(
            <View style={{flex: 1, backgroundColor: this.props.theme.bgColor}}>
                <Header title='Cá nhân'/>
                <View style={{flexDirection:'row', paddingHorizontal: 10, alignItems:'center', paddingVertical: 8,
                    backgroundColor: this.props.theme.bgColorItem, borderColor: this.props.theme.borderColor, borderBottomWidth: StyleSheet.hairlineWidth}}>
                    <View style={{flex: 9, flexDirection: 'row', alignItems:'center'}}>
                        <View style={{flex: 4, flexDirection:'row', alignItems:'center'}}>
                            <Image source={require('../../assets/image/avatar-default.png')} style={{width: 60, height: 60, borderRadius: 60}}/>
                            <View style={{marginLeft: 10}}>
                                <Text style={[styles.textLarge, {color: this.props.theme.textBold}]}>01666202390</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={{flex: 1}}>
                            <Ionicons name='ios-more' style={{color: '#fff', fontSize: 25, textAlign:'right'}}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 1}}>
                        <Icon name='arrow-right' style={{fontSize: 16, color: this.props.theme.textColor, textAlign: 'right'}}/>
                    </View>
                </View>
                <ScrollView style={{backgroundColor: this.props.theme.bgColor}}>
                    {this.rowItem({key: 1, navigator: 'TopupMenu', text: 'Thiết lập bảo vệ tài khoản', colorIcon: styles.textGreen})}
                    <View  style={[styles.row, {borderColor: this.props.theme.borderColor,
                        backgroundColor: this.props.theme.bgColorItem, marginTop: 25, borderTopWidth: StyleSheet.hairlineWidth}]}
                            onPress={()=>this.props.changeNum()}
                    >
                        <View style={styles.rowIcon}>
                            <View style={{justifyContent:'center'}}>
                                <Image
                                    style={{width: 24, height: 24, resizeMode:'contain'}}
                                    source={this.props.theme.icon.account}
                                />
                            </View>
                        </View>
                        <View style={[styles.rowView]}>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={[styles.textNormal, {color: this.props.theme.textBold}]}>Khả dụng: </Text>
                                <Text style={[styles.textNormal, styles.textGreen]}>1000.000.000 đ</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={[styles.textNormal, {color: this.props.theme.textBold}]}>Tạm giữ: </Text>
                                <Text style={[styles.textNormal, styles.textGreen]}>0 đ</Text>
                            </View>

                        </View>
                        <View style={styles.rowRight}/>
                    </View>
                    {this.arrItem.map((item)=>{
                        return this.rowItem(item);
                    })}
                    <View style={{paddingBottom: 50}}>
                        <View  style={[styles.row, {borderColor: this.props.theme.borderColor,
                            backgroundColor: this.props.theme.bgColorItem, marginTop: 25, borderTopWidth: StyleSheet.hairlineWidth}]}>
                            <View style={styles.rowIcon}>
                                <View style={{justifyContent:'center'}}>
                                    <Image
                                        style={{width: 24, height: 24, resizeMode:'contain'}}
                                        source={this.props.theme.icon.BrightMode}
                                    />
                                </View>
                            </View>
                            <View style={[styles.rowView]}>
                                <Text style={[styles.textNormal, {color: this.props.theme.textBold}]}>Giao diện sáng</Text>
                            </View>
                            <View style={styles.rowRight}>
                                <Switch
                                    onTintColor='#eee'
                                    tintColor = {this.props.theme.bgColor}
                                    thumbTintColor='#eee'
                                    value={this.state.valueTheme}
                                    onValueChange={(value)=>this.changeTheme(value)}
                                />
                            </View>
                        </View>
                        {this.rowItem({key: 7, navigator: 'TopupMenu', text: 'Đăng xuất'})}
                    </View>
                </ScrollView>
            </View>
        )
    }

    rowItem(item){
        return(
            <TouchableOpacity key={item.key} style={[styles.row, {borderColor: this.props.theme.borderColor,
                backgroundColor: this.props.theme.bgColorItem}, item.margin ? {marginTop: 25, borderTopWidth: StyleSheet.hairlineWidth} : null]}
                disabled={!item.navigator}>
                <View style={styles.rowIcon}>
                    <View style={{justifyContent:'center'}}>
                        <Image
                            style={{width: 24, height: 24, resizeMode:'contain'}}
                            source={
                                item.key === 1 ? this.props.theme.icon.Shield :(
                                item.key === 2 ? this.props.theme.icon.Card : (
                                item.key === 4 ? this.props.theme.icon.Callcenter : (
                                item.key === 5 ? this.props.theme.icon.Info : (
                                item.key === 6 ? this.props.theme.icon.QNA : (
                                item.key === 7 ? this.props.theme.icon.Logout : (
                                this.props.theme.icon.Shopping)))))
                            )}
                        />
                    </View>
                </View>
                <View style={[styles.rowView]}>
                    <Text style={[styles.textNormal, {color: this.props.theme.textBold}]}>{item.text}</Text>
                </View>
                <View style={styles.rowRight}>
                    {item.textRight ?
                        <Text style={[styles.textNormal ,{color: this.props.theme.textColor}]}>{item.textRight}</Text>
                        :<Icon name='arrow-right' style={{fontSize: 16, color: this.props.theme.textColor}}/>
                    }
                </View>
            </TouchableOpacity>
        )
    }
}

function mapStateToProps(state) {
    return {
        theme: state.theme
    }
}

export default connect(mapStateToProps, actionCreator)(User);