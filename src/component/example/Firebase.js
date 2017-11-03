import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/dist/SimpleLineIcons';
import styles from '../../assets/style/Style';
import {firebaseConfig} from '../../api/firebase';

// class ItemChat extends Component<{}>{
//     render(){
//         return(
//             <View>
//                 <Text>{this.props.item.username}: {this.props.item.message}</Text>
//             </View>
//         )
//     }
// }
//
// class ListChat extends Component<{}>{
//     render(){
//         return(
//             <FlatList
//                 data={this.props.data}
//                 keyExtractor={(item, index) => item.id}
//                 renderItem={({item}) => <ItemChat item={item.data}/>}
//             />
//         )
//     }
// }

export default class Firebase extends Component<{}> {
    constructor(props){
        super(props);
        this.state = {
            listChat: [],
            limit: 3
        };
        this.itemRef = firebaseConfig.database();
        console.ignoredYellowBox = [ 'Setting a timer' ];
    }

    componentDidMount(){
        this.listenerFirebase(this.itemRef, this.state.limit);
    }

    listenerFirebase(itemRef, limit){
        let items = [];
        console.log(limit);
        itemRef.ref('Chat').orderByKey().limitToLast(limit).on('child_added', (dataSnapshot)=>{
            items.push({
                id: dataSnapshot.key,
                data: dataSnapshot.val()
            });
            this.setState({
                listChat: items
            });
        });

        itemRef.ref('Chat').on('child_removed', (dataSnapshot)=>{
            items = items.filter((item)=>item.id !== dataSnapshot.key);
            console.log(dataSnapshot.key);
            console.log(this.state.listChat);
            this.setState({
                listChat: items
            });
        });
    }

    setDB(){
        this.itemRef.set({
            username: 'user 2',
            message: 'content 2'
        });
    }

    pushDB(){
        //this.itemRef.ref('Chat').child('new_ref').push({});
        this.itemRef.ref('Chat').push({
            username: 'user 1',
            message: 'content 1'
        });
    }

    removeDB(item){
        this.itemRef.ref('Chat').child(item.id).remove();
    }

    increase(){
        console.log('click');
        this.listenerFirebase(this.itemRef, this.state.limit + 3);
        this.setState({
            limit: this.state.limit + 3
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={()=> this.setDB()}>
                    <Text style={styles.buttonText}>Set DB</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> this.pushDB()}>
                    <Text style={styles.buttonText}>Push DB</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.increase.bind(this)}>
                    <Text style={styles.buttonText}>increase limit</Text>
                </TouchableOpacity>
                <FlatList
                    data={this.state.listChat}
                    extraData={this.state}
                    keyExtractor={(item, index) => item.id}
                    renderItem={({item}) =>
                        <TouchableOpacity onPress={()=>this.removeDB(item)}>
                            <Text>{item.data.username}: {item.data.message}</Text>
                        </TouchableOpacity>
                    }
                />
            </View>
        );
    }
}
