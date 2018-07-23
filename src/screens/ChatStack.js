import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'
// import { connect } from 'redux'
import ChatList from './ChatList'
import ChatIndividual from './ChatIndividual'
const ChatStackNavigator = StackNavigator({
    ChatList:{
        screen: ChatList
    },
    ChatIndividual: {
        screen: ChatIndividual,
    }
}, {
    animationEnabled: true
})

export default ChatStackNavigator