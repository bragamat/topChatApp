import React, { Component } from 'react'
import { View, Text, Button, TextInput, Keyboard, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { checkLogin, changeEmail, changePassword, changeUserName, SignUpAction } from '../actions/AuthActions'

export class SignUp extends Component{

    static navigationOptions = {
        title:'Sign up',
    }
    constructor(props){
        super(props)
        this.state={
        }
        this.props.checkLogin()
        
    }
    componentDidUpdate(){
        if(this.props.status == 1) {
            Keyboard.dismiss
            this.props.navigation.navigate('Chats')
        }
    }

    render(){
        return(
        <View style={styles.container}>
            <Text> Username</Text>
            <TextInput style={styles.input} value={this.props.username} onChangeText={this.props.changeUserName} />
            <Text>E-mail:</Text>
            <TextInput style={styles.input} autoCapitalize='none' value={this.props.email} onChangeText={this.props.changeEmail} />
            <Text>Password:</Text>
            <TextInput secureTextEntry={true} style={styles.input} value={this.props.password} onChangeText={this.props.changePassword} />
        <Button title="Do it!" onPress={() => {
            this.props.SignUpAction(this.props.username, this.props.email, this.props.password)
            }} />
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        margin:10,
        paddingTop: 15,
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input:{
        height:50,
        backgroundColor: '#DDDDDD',
        width: '80%',
        fontSize: 23
    },
    h1:{
        fontSize:30,
        marginBottom: 50
    },
    buttonArea:{
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})

const mapStateToProps = (state) => {
    return {
       email: state.auth.email,
       password: state.auth.password,
       username: state.auth.username,
       status: state.auth.status

    }
}

const SignUpConnect = connect(mapStateToProps, {
    checkLogin,
    changeEmail,
    changePassword,
    changeUserName,
    SignUpAction
} )(SignUp)

export default SignUpConnect