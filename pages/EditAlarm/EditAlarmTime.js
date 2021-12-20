import React, { Component } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

export default class EditAlarmTime extends Component {
  render() {
    return (
      <View style={ styles.container}>
        <View style={ styles.card }>
          <View style={ styles.row }>
            <TextInput 
              style={ styles.input }
              value= '13:00'
              selectionColor= 'orange'
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 130,
    justifyContent:'center',
    backgroundColor: '#0f0f0f',
  },
  card: {
    height: 50,
    justifyContent:'center',
    backgroundColor: "#212121",
    borderRadius: 10
  },
  row: {
    padding: 15,
  },
  input: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white'
  },
});