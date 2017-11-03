
import React, { Component } from 'react';
import {Text, View, StatusBar, TouchableOpacity, TouchableHighlight, StyleSheet, Image, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import SimpleLineIcons from 'react-native-vector-icons/dist/SimpleLineIcons';
import styles from '../assets/style/Style';

const width = Dimensions.get('window').width;

class Header extends Component<{}> {
    render() {
        return (
            <View>
                <StatusBar backgroundColor="transparent" translucent={true}/>
                <Image style={{width, height: 200, resizeMode: 'stretch', position:'absolute'}} source={require('../assets/image/bg-gray.png')}/>
                {this.props.title ?
                    <View style={{flexDirection: 'row', justifyContent:'center', paddingTop: 35, paddingBottom: 12, backgroundColor: this.props.theme.bgColorHome}}>
                        <View style={{alignItems:'center', justifyContent:'center', flex: 5}}>
                            <Text style={[styles.textWhite, styles.textBig, styles.textBold]}>{this.props.title}</Text>
                        </View>
                    </View>
                    : null}
                {this.props.left ?
                    <TouchableOpacity
                        style={{position:'absolute', top: 40, left: 5}}
                        onPress={()=>this.props.navigation.goBack()}>
                        <SimpleLineIcons name='arrow-left' style={{color: '#eee', fontSize: 20, width: 50, height: 30}}/>
                    </TouchableOpacity>
                    : null}
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        theme: state.theme,
    }
}

export default connect(mapStateToProps)(Header);


