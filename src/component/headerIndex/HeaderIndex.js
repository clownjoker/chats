import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <View style={styles.iconHeader}>
          <Image
            source={require('../../assests/icons/back.png')}
            style={styles.icon}
          />
          <Text style={styles.title}>INBOX LIST</Text>
          <Image
            source={require('../../assests/icons/search.png')}
            style={styles.icon}
          />
        </View>
        {/* start inbox Friend profile */}
        <View style={[styles.iconHeader, {marginTop: 30}]}>
          <View style={styles.inbFriPro}>
            <Image
              source={require('../../assests/icons/chat.png')}
              style={styles.iconIFP}
            />
            <Text style={[styles.titleIFP, {color: '#ac00e6'}]}>
              Inbox List
            </Text>
          </View>
          <View style={styles.inbFriPro}>
            <Image
              source={require('../../assests/icons/folder.png')}
              style={styles.iconIFP}
            />
            <Text style={styles.titleIFP}>Friend List</Text>
          </View>
          <View style={styles.inbFriPro}>
            <Image
              source={require('../../assests/icons/user.png')}
              style={styles.iconIFP}
            />
            <Text style={styles.titleIFP}>Profile</Text>
          </View>
        </View>
        {/* end inbox Friend profile */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#7070db',
    width: '100%',
    height: 120,
    marginBottom: 80,
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
  inbFriPro: {
    width: 105,
    height: 100,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#fff',
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconIFP: {
    width: 30,
    height: 30,
  },
  titleIFP: {
    fontWeight: 'bold',
    color: '#ddd',
    marginTop: 4,
  },
});
export default Header;
