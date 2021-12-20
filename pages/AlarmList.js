import React, { Component }  from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';

import ToggleSwitch from '../components/ToggleSwitch'

export default class AlarmList extends Component {  
  render() {
    return (
      <ScrollView style={ styles.container }>
        <View style={ styles.row }>
          <View style={ styles.alarm }>
            <Text style={ styles.time }> 08:00 </Text>
            <Text style={ styles.desc }> Good morning 😘, Everday </Text>
          </View>
          <View style={styles.toggleSwitch} >
            <ToggleSwitch />
          </View>              
        </View>
        <View style={ styles.row }>
          <View style={ styles.alarm }>
            <Text style={ styles.time }> 13:00 </Text>
            <Text style={ styles.desc }> Kumain ka na ba?, Everday </Text>
          </View>
          <View style={styles.toggleSwitch} >
            <ToggleSwitch />
          </View>              
        </View>
        <View style={ styles.row }>
          <View style={ styles.alarm }>
            <Text style={ styles.time }> 22:00 </Text>
            <Text style={ styles.desc }> Sleep well ❤️, Everday </Text>
          </View>
          <View style={styles.toggleSwitch} >
            <ToggleSwitch />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  row: {
    flex: 1,
    padding: 8,
    paddingBottom: 20,
    borderBottomWidth: .2,
    borderColor: '#666666',
    flexDirection: 'row',
    alignItems: 'center',    
    justifyContent:'space-between',
  },
  alarm: {
    fontSize: 50,
    fontWeight: '300',
    color: 'white'
  },
  time: {
    fontSize: 50,
    fontWeight: '300',
    color: 'white'
  },
  desc: {
    paddingLeft: 8,
    fontSize: 14,
    fontWeight: '400',
    color: 'white'
  },
  toggleSwitch: {
    paddingRight: 15,
  },
});