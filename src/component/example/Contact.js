import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, TextInput, KeyboardAvoidingView } from 'react-native';
import Contacts from 'react-native-contacts';

function ReFormatPhoneNumber(number) {
    return number.replace(' ', '').replace('(','').replace(')','').replace('-','').replace('+84','0');
}

export default class Contact extends Component<{}> {

    constructor(props){
        super(props);
        this.state = {
            contacts: [],
            phone: ''
        }
        this.contact = [];
    }

    componentDidMount(){
        Contacts.getAll((err, contacts) => {
            if(err === 'denied'){
                console.log(err);
            } else {
                this.contact = contacts;
                this.setState({contacts});
            }
        });
    }

    getAllContact(){
        console.log('Get all');
        Contacts.getAll((err, contacts) => {
            if(err === 'denied'){
                console.log(err);
            } else {
                console.log(contacts);
                this.contact = contacts;
                this.setState({contacts});
            }
        });
    }

    inputChange(phone){
        if(phone !== ''){
            let contacts =  [];
            let len = this.contact.length;
            let pattern = /^[0-9]+$/;
            let reFormatPhoneInput = ReFormatPhoneNumber(phone);
            for(let i = 0; i < len; i++){
                let item = this.contact[i];
                let phones = [];
                if(pattern.test(reFormatPhoneInput)){
                    for (let j = 0; j < item.phoneNumbers.length; j++){
                        let reFormatPhone = ReFormatPhoneNumber(item.phoneNumbers[j].number);
                        let index = reFormatPhone.indexOf(reFormatPhoneInput);
                        if(index >= 0){
                            phones.push(j);
                            break;
                        }
                    }
                }
                let fullname = (item.givenName ? item.givenName : '') + (item.middleName ? ' ' + item.middleName : '') + (item.familyName ? ' ' + item.familyName : '');
                if(phones.length > 0){
                    this.contact[i].phoneIndex = phones[0];
                    contacts.push(this.contact[i]);
                }
                else if(fullname.toLowerCase().indexOf(phone.toLowerCase()) >= 0){
                    contacts.push(this.contact[i]);
                }
            }
            console.log(contacts);
            this.setState({
                phone, contacts: contacts
            })
        }
        else{
            this.setState({
                phone, contacts: this.contact
            })
        }
    }

    pressContact(contact){
        if(contact.phoneIndex){
            this.setState({
                phone: ReFormatPhoneNumber(contact.phoneNumbers[contact.phoneIndex].number)
            })
        }
        else{
            this.setState({
                phone: ReFormatPhoneNumber(contact.phoneNumbers[0].number)
            })
        }
    }

    render() {
        return (
            <View style={{padding: 16, flex: 1}}>
                <TextInput
                    // underlineColorAndroid='transparent'
                    placeholder = "Nhập số điện thoại"
                    onChangeText={(phone) => this.inputChange(phone)} value={this.state.phone}
                />
                <TouchableOpacity onPress={()=>this.getAllContact()}>
                    <Text>Danh sách liên hệ</Text>
                </TouchableOpacity>
                <FlatList
                    data={this.state.contacts}
                    extraData={this.state}
                    keyExtractor={(item, index) => item.recordID}
                    style={{marginTop: 12}}
                    renderItem={({item}) =>
                        <TouchableOpacity
                            style={{borderBottomWidth: 1, borderBottomColor: '#ccc', paddingVertical:12}}
                            onPress={()=>this.pressContact(item)}
                        >
                            <Text>{item.givenName ? item.givenName : ''}{item.middleName ? ' ' + item.middleName : ''}{item.familyName ? ' ' + item.familyName : ''}</Text>
                            {
                                item.phoneNumbers.map((phone, index)=>{
                                    return(<Text key={index}>{phone.number}</Text>)
                                })
                            }
                        </TouchableOpacity>
                    }
                />
            </View>

        );
    }
}