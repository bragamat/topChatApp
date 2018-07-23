import React, { Component } from 'react'
import { View, Text, Button , StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { checkLogin } from '../actions/AuthActions'

export class Home extends Component{
    static navigationOptions = {
        title:'',
        header: null
    }
    constructor(props){
        super(props)
        this.state={}
        this.props.checkLogin()
        this.signInButton = this.signInButton.bind(this)
        this.signUpButton = this.signUpButton.bind(this)
        
    }
    signInButton(){
        this.props.navigation.navigate('SignIn')
    }
    signUpButton(){
        this.props.navigation.navigate('SignUp')
    }
    render(){
        return(
        <View style={styles.container}>
            <Text style={styles.h1}>Topsapp</Text>
            <View style={styles.buttonArea}>
                <Button onPress={this.signInButton} title="Sign in "/>
                <Button onPress={this.signUpButton} title="Sign up"/>
            </View>
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
       status: state.auth.status
    }
}

const HomeConnect = connect(mapStateToProps, {
    checkLogin
} )(Home)

export default HomeConnect