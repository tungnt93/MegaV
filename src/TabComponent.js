
import React, { Component } from 'react';
import {Text, View, StatusBar, TouchableOpacity, TouchableHighlight, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';
import IconS from 'react-native-vector-icons/dist/SimpleLineIcons';
import IconO from 'react-native-vector-icons/dist/Octicons';

const tab = [
        {name: 'HomeTab', index: 0, icon: require('./assets/image/icon/Home.png'), iconActive: require('./assets/image/icon/HomeActive.png')},
        {name: 'GiftTab', index: 1, icon: require('./assets/image/icon/Promotions.png'), iconActive: require('./assets/image/icon/PromotionsActive.png')},
        {name: 'HistoryTab', index: 2, icon: require('./assets/image/icon/TransactionHistory.png'), iconActive: require('./assets/image/icon/TransactionHistoryActive.png')},
        {name: 'UserTab', index: 3, icon: require('./assets/image/icon/User.png'), iconActive: require('./assets/image/icon/UserActive.png')},
    ];

class TabComponent extends Component<{}> {
    constructor(props){
        super(props);
    }

    render() {
        console.log(this.props.navigation.state);
        return (
            <View style={[styles.tabbar, {backgroundColor: this.props.theme.bgColorItem, borderColor: this.props.theme.borderColor}]}>
                {tab.map((e)=>{
                    return(
                        <TouchableOpacity
                            key={e.index}
                            style={[styles.tab, {borderColor: this.props.navigation.state.index === e.index ? this.props.theme.textColorActive : 'transparent'}]}
                            onPress={()=>this.props.navigation.navigate(e.name)}>
                            <View style={{justifyContent:'center'}}>
                                <Image
                                    style={{width: 24, height: 24, resizeMode:'contain'}}
                                    source={this.props.navigation.state.index === e.index ? e.iconActive : e.icon}
                                />
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tabbar: {
        flexDirection: 'row',
        height: 55,
        borderTopWidth: 0.5,
    },
    tab:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        borderBottomWidth: 2
    }
});

function mapStateToProps(state) {
    return {
        showGuide: state.showGuide,
        theme: state.theme,
        num: state.num
    }
}

export default connect(mapStateToProps)(TabComponent);


