import React, { Component }  from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import ToggleSwitch from '../components/ToggleSwitch'

export default class EditAlarm extends Component {
  render() {
    return (
      <View style={ styles.container}>
        <View style={ styles.card }>
          <TouchableOpacity style={ styles.row } onPress={() => this.props.navigation.navigate('EditAlarmTime')}>
            <Text style={ styles.label }>Time</Text>
            <Text style={ styles.desc }>13:00 {" "}
              <Icon
                name="chevron-right"
                size={14}
                color="#666666"/>
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={ styles.row } onPress={() => this.props.navigation.navigate('EditAlarmRepeat')}>
            <Text style={ styles.label }>Repeat</Text>
            <Text style={ styles.desc }>Everday {" "}
              <Icon
                name="chevron-right"
                size={14}
                color="#666666"/>
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={ styles.row } onPress={() => this.props.navigation.navigate('EditAlarmLabel')}>
            <Text style={ styles.label }>Label</Text>
            <Text style={ styles.desc }>Kumain ka na ba? {" "}
              <Icon
                name="chevron-right"
                size={14}
                color="#666666"/>
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={ styles.row } onPress={() => this.props.navigation.navigate('EditAlarmSound')}>
            <Text style={ styles.label }>Sound</Text>
            <Text style={ styles.desc }>Alarm (Default){" "} 
              <Icon
                name="chevron-right"
                size={14}
                color="#666666"/>
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={ styles.row } onPress={() => this.props.navigation.navigate('EditAlarmDismiss')}>
            <Text style={ styles.label }>Dismissal Method</Text>
            <Text style={ styles.desc }>Single Tap {" "}
              <Icon
                name="chevron-right"
                size={14}
                color="#666666"/>
            </Text>
          </TouchableOpacity>
          <View style={ styles.lastRow }>
            <Text style={ styles.label }>Snooze</Text>
            <ToggleSwitch />                
          </View>
        </View>
        <View style={ styles.space }>
          <TouchableOpacity style={ styles.deleteButton } onPress={() => alert('Alarm Deleted')}>
            <Text style={ styles.deleteText }>Delete Alarm</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    paddingRight: 15,
    paddingLeft: 15,
    backgroundColor: '#0f0f0f',
  },
  card: {
    backgroundColor: "#212121",
    borderRadius: 10
  },
  row: {
    padding: 15,
    borderBottomWidth: .2,
    borderColor: '#666666',
    flexDirection: 'row',
    justifyContent:'space-between',
  },
  lastRow: {
    padding: 15,
    borderColor: '#71797E',
    flexDirection: 'row',
    alignItems: 'center',    
    justifyContent:'space-between',
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white'
  },
  desc: {
    fontSize: 16,
    fontWeight: '500',
    color: '#666666'
  },
  space: {
    paddingTop: 30
  },
  deleteButton: {
    alignItems:'center',
    backgroundColor: "#212121",
    borderRadius: 10
  },
  deleteText: {
    padding: 15,
    fontSize: 16,
    fontWeight: '500',
    color: '#dc143c'
  },
});