import React from 'react';
import { getMessages, postMessage } from '../services/api';
import images from '../assets';
import Message from '../components/Message';
import Compose from '../components/Compose';
import { 
  View, ImageBackground, 
  Platform,
  KeyboardAvoidingView,
  Text, StyleSheet, Button, FlatList, ActivityIndicator 
} from 'react-native';

export default class ChatScreen extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.user}`,
        headerBackTitle: null
    })

    state = {
        messages: []
    }

    keyboardVerticalOffset = Platform.OS === 'ios' ? 60 : 100

    componentDidMount() {
      getMessages().then((messages) => {
            this.setState({
                messages
            })
        });
    }

    getMessageList(){
      return (
        <KeyboardAvoidingView 
          behavior="padding"
          keyboardVerticalOffset={this.keyboardVerticalOffset}
          style={styles.container}
        >
          <FlatList
            data={this.state.messages}
            renderItem={Message}
            keyExtractor={(item, index) => (`message-${index}`)}
          />
          <Compose submit={postMessage} />
        </KeyboardAvoidingView>
      )
    }

    getLoadingIndicator(){
      return (
        <View style={styles.loading}>
          <ActivityIndicator size="large"/>                  
        </View>
      )
    }
    
   
    render() {
        return (
            <ImageBackground
                style={styles.container} source={images.bg}> 
                { this.state.messages.length > 0 
                  ? this.getMessageList()
                  : this.getLoadingIndicator()
              }
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'transparent', 
      width: '100%'
  },
  loading: {
    flex: 1, 
    justifyContent: 'center'
  }
})