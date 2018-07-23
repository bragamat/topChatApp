import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
// import { } from './actions/AuthActions'

export class ChatList extends Component{
    static navigationOptions = {
        title:'',
        tabBarLabel: 'Chats',
        header: null
    }
    constructor(props){
        super(props)
        this.state={}
    }

    componentDidUpdate(){
        if(this.props.activeChat !== ''){
            this.props.navigation.navigate('ChatIndividual')
        }
    }
    render(){
        return(
        <View style={styles.container}>
            <Text>
                PAGINA ChatList {this.props.status} - {this.props.uid}
            </Text>
            <Button title="Go to Individual" onPress={() => {
                this.props.navigation.navigate('ChatIndividual')
            }}/>
                
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
       status: state.auth.status,
       uid: state.auth.uid,
       activeChat: state.chat.activeChat
       
    }
}

const ChatListConnect = connect(mapStateToProps, {
} )(ChatList)

export default ChatListConnect