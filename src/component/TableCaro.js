import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Platform, ScrollView, StatusBar, FlatList, Dimensions} from 'react-native';
import { connect } from 'react-redux';
import * as actionCreator from '../../redux/actionCreators';

const width = Dimensions.get('window').width;
const eWidth = Math.floor(width/15);

class TableCaro extends Component<{}>{
    constructor(props){
        super(props);
        let arrChoose = [];
        for(let i=0; i<255;i++){
            arrChoose.push({key: i, color: 'blue', bgColor: '#fff', value: ''})
        }
        this.name = 'tungnt';
        this.state = {
            arrChoose,
            players: {me: {name: this.name, score: 10, turn: true}, opponent: {name: '', score: 0, turn: false}},
            message: 'Click bắt đầu để chơi'
        }
    }

    playerChoose(pos, isMe, bgColor){
        let item = {key: pos, color: isMe ? 'blue' : 'red', bgColor, value: isMe ? 'x' : 'o'};
        let items = this.state.arrChoose;
        items[items.findIndex(e => e.key === pos)] = item;
        this.setState({
            arrChoose: items
        })
    }

    startGame(){
        this.playerChoose(10, false, '#fff');
    }

    userJoin(username){
        if(username === this.name){

        }
        else{
            let players = {me: {name: this.name, score: 0, turn: false}, opponent: {name: username, score: 0, turn: false}};
            this.setState({players});
        }
    }

    userExit(username){
        if(username === this.name){

        }
        else{
            let players = {me: {name: this.name, score: 0, turn: false}, opponent: {name: '', score: 0, turn: false}};
            this.setState({players});
        }
    }

    render(){
        return(
            <ScrollView style={{backgroundColor: '#fff'}}>
                <View style={{flex: 1, alignItems:'center'}}>
                    <FlatList
                        style={{alignSelf: 'center', marginTop: 40}}
                        data={this.state.arrChoose}
                        renderItem = {({item})=>
                            <TouchableOpacity
                                disabled = {item.value !== ''}
                                onPress={()=>this.playerChoose(item.key, true, '#fff')}
                                style={{borderColor: '#ddd', borderWidth: 1, width: eWidth, height: eWidth}}>
                                <Text style={{color: item.color, fontSize: 18, textAlign:'center', backgroundColor:item.bgColor}}>{item.value}</Text>
                            </TouchableOpacity>
                        }
                        horizontal = {false}
                        numColumns = {15}
                    />
                    <TouchableOpacity
                        style={{backgroundColor: 'blue', paddingVertical: 5, paddingHorizontal: 15, borderRadius: 5,
                            alignItems:'center', marginTop: 15}}
                        onPress={()=>this.userJoin('abc')}
                    >
                        <Text style={{fontSize: 14, color:'#fff'}}>Bắt đầu</Text>
                    </TouchableOpacity>
                    <Text style={{fontSize: 14, color:'#000', marginTop: 5 }}>{this.state.message}</Text>
                    <View style={{flexDirection:'row', padding: 10}}>
                        <View style={{flex: 1, alignItems:'flex-start'}}>
                            <View style={{flexDirection:'row'}}>
                                <Text style={this.state.players.me.turn ? styles.turnOn : styles.turnOff}>Bạn </Text>
                                <Text style={{color:'blue', fontSize: 16}}>(x)</Text>
                            </View>
                            <Text style={{fontSize: 14, color: '#000'}}>Điểm số {this.state.players.me.score.toString()}</Text>
                        </View>
                        <View style={{flex: 1, alignItems:'flex-end'}}>
                            {this.state.players.opponent.name !== '' ?
                                <View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={this.state.players.opponent.turn ? styles.turnOn : styles.turnOff}>{this.state.players.opponent.name}</Text>
                                        <Text style={{color:'red', fontSize: 16}}>(o)</Text>
                                    </View>
                                    <Text style={{fontSize: 14, color: '#000'}}>Điểm số {this.state.players.opponent.score.toString()}</Text>
                                </View>
                                :null
                            }
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    turnOff:{
        fontSize: 14, color: '#000'
    },
    turnOn:{
        fontSize: 16, color: 'red'
    }
});

function mapStateToProps(state) {
    return {
        showGuide: state.showGuide,
        theme: state.theme
    }
}

export default connect(mapStateToProps, actionCreator)(TableCaro);