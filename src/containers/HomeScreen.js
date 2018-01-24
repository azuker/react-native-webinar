import React from 'react';
import images from '../assets'
import { 
  StyleSheet, Text, View, Button, StatusBar, ImageBackground, 
  FlatList,
  ActivityIndicator } from 'react-native';
import { getChats } from '../services/api';
import Contact from '../components/Contact';

export default class HomeScreen extends React.Component {
  
  static navigationOptions = {
    title: 'Chats',
  };

  state = {
    chats: []
  }

  componentDidMount() {
    getChats().then((chats) => {
        this.setState({
            chats
        })
    });
  }

  render() {
    return (
      <ImageBackground
          style={styles.container} source={images.bg}> 
          { this.state.chats.length > 0 ? (
            <FlatList
            data={this.state.chats}
            renderItem={({ item }) => 
              <Contact navigate={(name) =>    
                this.props.navigation.navigate('chat', 
                { user: name })} {...item} 
              /> 
            }
            keyExtractor={(item, index) => (`chat-${index}`)}
        />
          ) : 
          <View style={{ flex: 1, justifyContent: 'center'}}>
            <ActivityIndicator size="large"/>                  
          </View>
        }
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent', 
    width: '100%'
},
  button: {
    padding: 10
  }
});
