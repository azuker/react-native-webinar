import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Message = ({ item: { incoming, message }}) => (
  <View style={[
      styles.listItem, incoming &&
          styles.incomingMessage
  ]}>
      <Text>{message}</Text>
  </View>
)

const styles = StyleSheet.create({
  listItem: {
    width: '70%',
    margin: 10,
    padding: 10,
    backgroundColor: 'white',
    borderColor: '#979797',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10
  },
  incomingMessage: {
      alignSelf: 'flex-end',
      backgroundColor: '#E1FFC7'
  } 
})
export default Message;