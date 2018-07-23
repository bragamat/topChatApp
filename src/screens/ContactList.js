import React, { Component } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { getContactList, createChat } from '../actions/ChatActions'
import ContactItem from '../components/ContactList/ContactItem'
export class ContactList extends Component{
    static navigationOptions = {
        title:'',
        tabBarLabel: 'Contacts',
        header: null
    }
    constructor(props){
        super(props)
        this.state={}
        this.props.getContactList(this.props.uid)
        this.contactClick = this.contactClick.bind(this)
    }

    contactClick(user){
        this.props.createChat( this.props.uid, user.key)
        this.props.navigation.navigate('ChatStack')
    }
    render(){
        return(
        <View style={styles.container}>
            <FlatList 
            data={this.props.contacts}
            renderItem={({item})=> <ContactItem data={item} onPress={this.contactClick} /> }/>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        margin:10,
        paddingTop: 15
    }
})

const mapStateToProps = (state) => {
    return {
       uid: state.auth.uid,
       contacts: state.chat.contacts,
    }
}

const ContactListConnect = connect(mapStateToProps, {
    getContactList,
    createChat
} )(ContactList)

export default ContactListConnect