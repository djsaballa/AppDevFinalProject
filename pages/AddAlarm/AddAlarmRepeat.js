import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default class AddAlarmRepeat extends Component {
  render() {
    return (
      <View style={ styles.container}>
        <View style={ styles.card }>
          <TouchableOpacity style={ styles.row } >
            <Text style={ styles.input }>Every Sunday</Text>
          </TouchableOpacity>
          <TouchableOpacity style={ styles.row } >
            <Text style={ styles.input }>Every Monday</Text>
          </TouchableOpacity>
          <TouchableOpacity style={ styles.row } >
            <Text style={ styles.input }>Every Tuesday</Text>
          </TouchableOpacity>
          <TouchableOpacity style={ styles.row } >
            <Text style={ styles.input }>Every Wednesday</Text>
          </TouchableOpacity>
          <TouchableOpacity style={ styles.row } >
            <Text style={ styles.input }>Every Thursday</Text>
          </TouchableOpacity>
          <TouchableOpacity style={ styles.row } >
            <Text style={ styles.input }>Every Friday</Text>
          </TouchableOpacity>
          <TouchableOpacity style={ styles.lastRow } >
            <Text style={ styles.input }>Every Saturday</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
    
const styles = StyleSheet.create({  
  container: {
    flex: 1,
    paddingTop: 30,
    paddingRight: 20,
    paddingBottom: 60,
    paddingLeft: 20,
    backgroundColor: '#0f0f0f',
  },
  card: {
    backgroundColor: "#212121",
    borderRadius: 10
  },
  row: {
    padding: 15,
    paddingLeft: 25,
    borderBottomWidth: .2,
    borderColor: '#666666',
  },
  lastRow: {
    padding: 15,
    paddingLeft: 25,
    borderColor: '#71797E',
  },
  input: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white'
  },
});