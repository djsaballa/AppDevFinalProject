import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class EditAlarmRepeat extends Component {
  render() {
    return (
      <View style={ styles.container}>
        <View style={ styles.card }>
          <TouchableOpacity style={[ styles.row, styles.selected ]} >
            <Text style={ styles.input }>Every Sunday</Text>
            <Icon
                name="check-circle"
                size={18}
                color="orange"/>
          </TouchableOpacity>
          <TouchableOpacity style={[ styles.row, styles.selected ]} >
            <Text style={ styles.input }>Every Monday</Text>
            <Icon
                name="check-circle"
                size={18}
                color="orange"/>
          </TouchableOpacity>
          <TouchableOpacity style={[ styles.row, styles.selected ]} >
            <Text style={ styles.input }>Every Tuesday</Text>
            <Icon
                name="check-circle"
                size={18}
                color="orange"/>
          </TouchableOpacity>
          <TouchableOpacity style={[ styles.row, styles.selected ]} >
            <Text style={ styles.input }>Every Wednesday</Text>
            <Icon
                name="check-circle"
                size={18}
                color="orange"/>
          </TouchableOpacity>
          <TouchableOpacity style={[ styles.row, styles.selected ]} >
            <Text style={ styles.input }>Every Thursday</Text>
            <Icon
                name="check-circle"
                size={18}
                color="orange"/>
          </TouchableOpacity>
          <TouchableOpacity style={[ styles.row, styles.selected ]} >
            <Text style={ styles.input }>Every Friday</Text>
            <Icon
                name="check-circle"
                size={18}
                color="orange"/>
          </TouchableOpacity>
          <TouchableOpacity style={[ styles.lastRow, styles.selected ]} >
            <Text style={ styles.input }>Every Saturday</Text>
            <Icon
                name="check-circle"
                size={18}
                color="orange"/>
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
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#0f0f0f',
  },
  card: {
    justifyContent:'center',
    backgroundColor: "#212121",
    borderRadius: 10
  },
  row: {
    padding: 10,
    borderBottomWidth: .2,
    borderColor: '#666666',
    flexDirection: 'row',
    justifyContent:'space-between',
  },
  lastRow: {
    padding: 10,
    borderColor: '#71797E',
    flexDirection: 'row',
    justifyContent:'space-between',
  },
  input: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white'
  },
  selected: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
});