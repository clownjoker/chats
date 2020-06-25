import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Header from './src/component/headerIndex/HeaderIndex';
import CardUser from './src/component/cardUser/CardUser';
import Chats from './src/component/ChatsScreen/chats';
class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Chats />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ebebfa',
    flex: 1,
  },
});
export default App;
