import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Slider } from 'react-native';
import { connect } from 'react-redux';
import * as actionCreator from '../redux/actionCreators';

export default class FirstSlide extends Component<{}> {
    constructor(props){
        super(props);
        this.state = { age: 18 }
    }

    render() {
        return (
            <View style={styles.container}>
                <Slider
                    style={{ width: 300 }}
                    step={1}
                    minimumValue={18}
                    maximumValue={71}
                    value={this.state.age}
                    onValueChange={val => this.setState({ age: val })}
                    onSlidingComplete={ val => this.getVal(val)}
                />
                <Text>
                    {this.state.age}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        flexDirection: 'row'
    },
});