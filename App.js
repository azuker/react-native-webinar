import React from 'react';
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import AppNavigator from './src';
import { initApi } from './src/services/api';

console.ignoredYellowBox = ['Remote debugger'];

export default class App extends React.Component {

  componentDidMount(){
    initApi();
  }
  
  render() {
    return (
      <View style={styles.app}>
        <AppNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
  }
})