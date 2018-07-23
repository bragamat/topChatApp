import React, { Component } from 'react'
import { View, Text, TouchableHighlight, StyleSheet} from 'react-native'

export default class ContactItem extends Component {
   constructor(props){
       super(props)
       this.onClick = this.onClick.bind(this)
   }
   onClick(){
    this.props.onPress(this.props.data)
   }
    render(){
        return(
            <TouchableHighlight underlayColor="#DDDDDD" style={ContactItemStyles.buttonArea} onPress={this.onClick}>
                <Text>
                    {this.props.data.username || this.props.data.name}
                </Text>
            </TouchableHighlight>
        )
    }
}

const ContactItemStyles = StyleSheet.create({
    buttonArea:{
        height: 40,
        flex:1,
        justifyContent: 'center',
        paddingLeft: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#CCCCCC'
    }
})