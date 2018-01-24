import React from 'react';
import { getMessages } from '../services/api';
import images from '../assets';
import Message from '../components/Message';
import { 
  View, ImageBackground, 
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

    componentDidMount() {
      getMessages().then((messages) => {
            this.setState({
                messages
            })
        });
    }
   
    render() {
        return (
            <ImageBackground
                style={styles.container} source={images.bg}> 
                { this.state.messages.length > 0 ? (
                  <FlatList
                  data={this.state.messages}
                  renderItem={({ item }) =>
                      <Message {...item} />
                  }
                  keyExtractor={(item, index) => (`message-${index}`)}
              />
                ) : 
                <View style={{ flex: 1, justifyContent: 'center'}}>
                  <ActivityIndicator size="large"/>                  
                </View>
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
  }
})