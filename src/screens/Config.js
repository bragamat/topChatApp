import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
import { signOut } from '../actions/AuthActions'

export class Config extends Component{
    static navigationOptions = {
        title:'Config',
        tabBarLabel: 'Config',
        header: null
    }
    constructor(props){
        super(props)
        this.state={}
        this.logOut = this.logOut.bind(this)
    }

    logOut(){
        this.props.signOut()
        this.props.navigation.dispatch(NavigationActions.reset({
            index:0,
            actions:[
                NavigationActions.navigate({routeName: 'Home'})
            ]
        }))
    }
    render(){
        return(
        <View style={styles.container}>
            <Text>
                PAGINA Config
            </Text>
            <Button title="logout" onPress={this.logOut}/>
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
       uid: state.auth.uid
    }
}

const ConfigConnect = connect(mapStateToProps, {
    signOut
} )(Config)

export default ConfigConnect