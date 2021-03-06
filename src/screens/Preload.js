import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions, StackActions } from 'react-navigation'
import { checkLogin } from '../actions/AuthActions'

export class Preload extends Component{
    static navigationOptions = {
        title:'',
        header: null
    }
    constructor(props){
        super(props)
        this.state={}
        this.props.checkLogin()
        this.directPages = this.directPages.bind(this)
    }
    directPages(){
        if(this.props.status == 1){
            this.props.navigation.dispatch(NavigationActions.reset({
                index:0,
                actions:[
                    NavigationActions.navigate({routeName: 'Chats'})
                ]
            }))
        }
        if(this.props.status == 2){
            this.props.navigation.dispatch(NavigationActions.reset({
                index:0,
                actions:[
                    NavigationActions.navigate({routeName: 'Home'})
                ]
            }))
        }
    }
    componentDidMount(){
        this.directPages()
    }
    componentDidUpdate(){
        this.directPages()
    }
    render(){
        return(
        <View style={styles.container}>
            <Text>
                Carregando...{this.props.status}
            </Text>
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
       status: state.auth.status
    }
}

const PreloadConnect = connect(mapStateToProps, {
    checkLogin
} )(Preload)

export default PreloadConnect