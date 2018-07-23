import React, { Component } from 'react'
import { View, Text, Button, TextInput, Keyboard, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { checkLogin, changeEmail, changePassword, SignInAction } from '../actions/AuthActions'

export class SignIn extends Component{

    static navigationOptions = {
        title:'Sign In',
    }
    constructor(props){
        super(props)
        this.state={}
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
        <Text> Usuário logado: {this.props.uid} </Text>
            <Text>E-mail:</Text>
            <TextInput style={styles.input} autoCapitalize='none' value={this.props.email} onChangeText={this.props.changeEmail} />
            <Text>Password:</Text>
            <TextInput secureTextEntry={true} style={styles.input} value={this.props.password} onChangeText={this.props.changePassword} />
        <Button title="Log me in!" onPress={() => {this.props.SignInAction(this.props.email, this.props.password)} } />
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
        uid: state.auth.uid,
       email: state.auth.email,
       password: state.auth.password,
       status: state.auth.status
    }
}

const SignInConnect = connect(mapStateToProps, {
    checkLogin,
    changeEmail,
    changePassword,
    SignInAction
} )(SignIn)

export default SignInConnect