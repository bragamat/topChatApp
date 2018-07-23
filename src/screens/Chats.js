import React, { Component } from 'react'
import { TabNavigator } from 'react-navigation'
// import { connect } from 'redux'
import ChatStack from './ChatStack'
import ContactList from './ContactList'
import Config from './Config'

const ChatsNavigator = TabNavigator({
    ChatStack:{
        screen: ChatStack,
        navigationOptions:{
            tabBarLabel: 'Conversas'
        }
    },
    ContactList: {
        screen: ContactList,
    },
    Config:{
        screen: Config
    }

}, {
    animationEnabled: true
})

export default ChatsNavigator