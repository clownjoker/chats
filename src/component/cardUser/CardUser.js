import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Chats from '../ChatsScreen/chats';

class CardUser extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <View style={styles.card} onPress={() => this.props('Chats')}>
            <View style={{flexDirection: 'row'}}>
              <View style={{alignItems: 'center'}}>
                <Image
                  source={require('../../assests/image/m.jpeg')}
                  style={styles.img}
                />
              </View>
              <View style={{marginLeft: 10}}>
                <Text style={{marginTop: 9, fontWeight: 'bold'}}>Joker</Text>
                <Text style={{color: '#c2d6d6'}}>hi (:</Text>
              </View>
            </View>

            <View style={{marginTop: 10, marginRight: 10}}>
              <Text style={{color: '#c2d6d6'}}>8:25 pm</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.card}>
            <View style={{flexDirection: 'row'}}>
              <View style={{alignItems: 'center'}}>
                <Image
                  source={require('../../assests/image/m1.jpeg')}
                  style={styles.img}
                />
              </View>
              <View style={{marginLeft: 10}}>
                <Text style={{marginTop: 9, fontWeight: 'bold'}}>Ali</Text>
                <Text style={{color: '#c2d6d6'}}>hi (:</Text>
              </View>
            </View>

            <View style={{marginTop: 10, marginRight: 10}}>
              <Text style={{color: '#c2d6d6'}}>9:40 pm</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  card: {
    backgroundColor: '#fff',
    height: 95,
    marginLeft: 12,
    marginRight: 12,
    borderRadius: 10,
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  img: {
    width: 85,
    height: 85,
    borderRadius: 90,
    marginLeft: 10,
    marginTop: 5,
  },
});
export default CardUser;
