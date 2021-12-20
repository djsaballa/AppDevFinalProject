import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class EditAlarmDismiss extends Component {
  render() {
    return (
      <View style={ styles.container}>
        <ScrollView>
          <Text style={ styles.label}> SHAKE </Text>
          <View style={ styles.card }>
            <TouchableOpacity style={ styles.row } >
              <Text style={ styles.input }>Easy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={ styles.row } >
              <Text style={ styles.input }>Moderate</Text>
            </TouchableOpacity>
            <TouchableOpacity style={ styles.lastRow } >
              <Text style={ styles.input }>Difficult</Text>
            </TouchableOpacity>
          </View>
          <Text style={ styles.label}> SHOUT </Text>
          <View style={ styles.card }>
            <TouchableOpacity style={ styles.row } >
              <Text style={ styles.input }>Easy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={ styles.row } >
              <Text style={ styles.input }>Moderate</Text>
            </TouchableOpacity>
            <TouchableOpacity style={ styles.lastRow } >
              <Text style={ styles.input }>Difficult</Text>
            </TouchableOpacity>
          </View>
          <Text style={ styles.label}> TAP </Text>
          <View style={ styles.card }>
            <TouchableOpacity style={[ styles.row, styles.selected ]} >
              <Text style={ styles.input }>Single (Default)</Text>
              <Icon
                name="check-circle"
                size={18}
                color="orange"/>
            </TouchableOpacity>
            <TouchableOpacity style={ styles.lastRow } >
              <Text style={ styles.input }>Multiple</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({  
  container: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#0f0f0f',
  },
  card: {
    backgroundColor: "#212121",
    borderRadius: 10
  },
  row: {
    padding: 10,
    borderBottomWidth: .2,
    borderColor: '#666666',
  },
  lastRow: {
    padding: 10,
    borderColor: '#71797E',
  },
  label: {
    fontSize: 14,
    paddingTop: 20,
    paddingLeft: 10,
    paddingBottom: 5,
    fontWeight: '400',
    color: '#737373'
  },
  input: {
    fontSize: 16,
    fontWeight: '400',
    color: 'white'
  },
  selected: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
});

