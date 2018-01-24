import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './containers/HomeScreen';
import ChatScreen from './containers/ChatScreen';

const AppNavigator = StackNavigator({
  home: { screen: HomeScreen },
  chat: { screen: ChatScreen }
})


export default AppNavigator;