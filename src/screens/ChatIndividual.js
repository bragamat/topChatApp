import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
// import { } from './actions/AuthActions'

export class ChatIndividual extends Component{
    static navigationOptions = {
        title:'Conversa interna',
    }
    constructor(props){
        super(props)
        this.state={}
    }
    render(){
        return(
        <View style={styles.container}>
            <Text>
                PAGINA CONVERSA INTERNA
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
       status: state.auth.status,
       uid: state.auth.uid
    }
}

const ChatIndividualConnect = connect(mapStateToProps, {
} )(ChatIndividual)

export default ChatIndividualConnect