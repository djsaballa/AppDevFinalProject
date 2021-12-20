import React, { Component }  from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import ToggleSwitch from '../components/ToggleSwitch'

export default class AddAlarm extends Component {
  render() {
    return (
      <View style={ styles.container}>
        <View style={ styles.card }>
          <TouchableOpacity style={ styles.row } onPress={() => this.props.navigation.navigate('AddAlarmTime')}>
            <Text style={ styles.label }>Time</Text>
            <Text style={ styles.desc }>00:00 {" "}
              <Icon
                name="chevron-right"
                size={14}
                color="#666666"/>
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={ styles.row } onPress={() => this.props.navigation.navigate('AddAlarmRepeat')}>
            <Text style={ styles.label }>Repeat</Text>
            <Text style={ styles.desc }>Never {" "}
              <Icon
                name="chevron-right"
                size={14}
                color="#666666"/>
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={ styles.row } onPress={() => this.props.navigation.navigate('AddAlarmLabel')}>
            <Text style={ styles.label }>Label</Text>
            <Text style={ styles.desc }>Alarm{" "}
              <Icon
                name="chevron-right"
                size={14}
                color="#666666"/>
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={ styles.row } onPress={() => this.props.navigation.navigate('AddAlarmSound')}>
            <Text style={ styles.label }>Sound</Text>
            <Text style={ styles.desc }>Alarm (Default){" "} 
              <Icon
                name="chevron-right"
                size={14}
                color="#666666"/>
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={ styles.row } onPress={() => this.props.navigation.navigate('AddAlarmDismiss')}>
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 150,
    paddingLeft: 15,
    paddingRight: 15,
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
});