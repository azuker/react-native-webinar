import React from 'react';
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import AppNavigator from './src';

export default class App extends React.Component {
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