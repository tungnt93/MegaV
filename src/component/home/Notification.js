
import React, { Component } from 'react';
import {Text, View, FlatList, TouchableOpacity, Dimensions, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';
import IconS from 'react-native-vector-icons/dist/SimpleLineIcons';
import IconO from 'react-native-vector-icons/dist/Octicons';
import Header from '../Header';

const width = Dimensions.get('window').width;
class Notification extends Component<{}> {
    constructor(props){
        super(props);
        this.state = {
            arrNoti: [
                {id: 1, title: 'Thông báo về các giao dịch, tin tức khuyến mãi, abc abc bac bac', time: '1 giây trước', img: null},
                {id: 1, title: 'Thông báo về các giao dịch, tin tức khuyến mãi, abc abc bac bac', time: '1 giây trước', img: 'http://www.webpage-maker.com/guide/files/200821911435669_2.jpg'},
            ]
        }
    }

    render() {
        console.log(this.props.navigation.state);
        return (
            <View style={{flex: 1, backgroundColor: this.props.theme.bgColor}}>
                <Header title='Thông báo' left={true} navigation={this.props.navigation}/>
                <FlatList
                    style={{backgroundColor: this.props.theme.bgColor}}
                    data={this.state.arrNoti}
                    keyExtractor={(item, index) => index}
                    renderItem = {({item})=>
                        <View style={{flexDirection:'row', backgroundColor: this.props.theme.bgColorItem, borderColor: this.props.theme.borderColor,
                            borderBottomWidth: 0.9, padding: 10}}>
                            <View style={item.img ? {width: width - 120} : null}>
                                <Text style={{color: this.props.theme.textBold, fontSize: 14}}>{item.title}</Text>
                                <Text style={{color: this.props.theme.textNotActive, fontSize: 14, fontStyle: 'italic'}}>{item.time}</Text>
                            </View>
                            {item.img ?
                                <Image style={{width: 90, height: 60, resizeMode:'stretch', marginLeft: 10}} source={{uri: item.img}}/>
                            : null}

                        </View>
                    }
                />
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        theme: state.theme,
    }
}

export default connect(mapStateToProps)(Notification);


