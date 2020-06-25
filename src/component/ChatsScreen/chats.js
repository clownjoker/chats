import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TextInput} from 'react-native';

class Chats extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.iconHeader}>
            <Image
              source={require('../../assests/icons/back.png')}
              style={styles.icon}
            />
            <Text style={styles.title}>Chats</Text>
            <Image
              source={require('../../assests/icons/me.png')}
              style={styles.icon}
            />
          </View>
        </View>

        {/* content */}
        <View style={{flex: 1}}>
          <View style={styles.contentMsg}>
            <Image
              source={require('../../assests/image/m.jpeg')}
              style={styles.image}
            />
            <View style={styles.msg}>
              <Text style={{marginTop: 10, marginLeft: 10}}>hi</Text>
            </View>
          </View>
          <View style={[styles.contentMsg, {marginTop: -5}]}>
            <View style={styles.msg}>
              <Text style={{marginTop: 10, marginLeft: 10}}>hi</Text>
            </View>
            <Image
              source={require('../../assests/image/m1.jpeg')}
              style={styles.image}
            />
          </View>
          {/* footer */}
          <View style={styles.footer}>
            <TextInput placeholder="New Message..." style={styles.textMsg} />
            <View style={styles.sendMsg}>
              <Image
                source={require('../../assests/icons/send.png')}
                style={[styles.icon, {marginLeft: 20}]}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ebebfa',
  },
  header: {
    backgroundColor: '#7070db',
    width: '100%',
    height: 50,
    marginBottom: 20,
  },
  iconHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 12,
    marginRight: 12,
    marginTop: 15,
  },
  icon: {
    width: 22,
    height: 22,
  },
  title: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 16,
  },
  contentMsg: {
    flexDirection: 'row',
    width: '100%',
    marginLeft: 12,
    marginRight: 12,
    height: 80,

    elevation: 4,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  msg: {
    width: 250,
    height: 50,
    backgroundColor: '#fff',
    marginLeft: 10,
    marginRight: 10,
    borderTopLeftRadius: 12,
    borderBottomRightRadius: 12,
    marginTop: 13,
  },
  footer: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: '#fff',
    marginTop: 340,
  },
  textMsg: {
    width: 280,
    height: 50,
    paddingLeft: 15,
  },
  sendMsg: {
    height: 50,
    width: 80,
    backgroundColor: '#7070db',
    borderTopLeftRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Chats;
