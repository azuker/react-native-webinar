import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default class ChatScreen extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: `Chat with ${navigation.state.params.user}`
  });

  render() {
    return (
      <View style={styles.container}>
        <Text>ChatScreen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  }
});
