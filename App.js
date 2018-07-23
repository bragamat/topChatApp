import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk'
import firebase from './src/FirebaseConnection'

import Reducers from './src/Reducers'

import Preload from './src/screens/Preload'
import Home from './src/screens/Home'
import ChatList from './src/screens/ChatList'
import Chats from './src/screens/Chats'
import SignUp from './src/screens/Signup'
import SignIn from './src/screens/SignIn'


let store = createStore(Reducers, applyMiddleware(ReduxThunk))

const Navigator = StackNavigator({
  Preload:{
    screen: Preload
  },
  Home:{
    screen:Home
  },
  Chats:{
    screen: Chats
  },
  SignUp:{
    screen: SignUp
  },
  SignIn:{
    screen: SignIn
  }

})

export default class App extends Component{
  render(){
    return(
      <Provider store={store}>
        <Navigator/>
      </Provider>
        
    )
  }
}
