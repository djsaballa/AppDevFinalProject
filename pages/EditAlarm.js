import React, { Component }  from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert, DeviceEventEmitter } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Notifications from 'expo-notifications';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class EditAlarm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      alarm: {
        notificationId: '',
        label: 'Alarm',
        time: {
          hour: '00',
          min: '00'
        },
        enabled: true,
        dismissMethod: 'default',
        day:'sunday'
      },
      edit: false 
    };
  }

  componentDidMount() {
    if(this.props.route.params.alarm && this.props.route.params.alarm != this.state.alarm.notificationId) {
      let alarm = this.props.route.params.alarm
      this.setState({ alarm });
    }
  }

  componentDidUpdate() {
    if(this.props.route.params.time && this.props.route.params.time != this.state.alarm.time) {
      let alarm = this.state.alarm;
      alarm.time = this.props.route.params.time;
      this.setState({ alarm });
    }

    if(this.props.route.params.day && this.props.route.params.day != this.state.alarm.day) {
      let alarm = this.state.alarm;
      alarm.day = this.props.route.params.day;
      this.setState({ alarm });
    }

    if(this.props.route.params.label && this.props.route.params.label != this.state.alarm.label) {
      let alarm = this.state.alarm;
      alarm.label = this.props.route.params.label;
      this.setState({ alarm });
    }
   }

  async save(notifcationId) {
    let storedAlarms = await AsyncStorage.getItem('alarms');
    let alarms = JSON.parse(storedAlarms)
    let alarmMap = alarms.map(alarm => alarm.notificationId);
    let alarmIndex = alarmMap.indexOf(notifcationId);

    let days = [
      'sunday',
      'monday',
      'tuesday',
      'wednesday',
      'thursday',
      'friday',
      'saturday'
    ]
    let weekday = days.indexOf(this.state.alarm.day) + 1; 
    let time = new Date();
    time.setHours(this.state.alarm.time.hour);
    time.setMinutes(this.state.alarm.time.min);
    time.setSeconds(0);
    
    let id = await Notifications.scheduleNotificationAsync({
      content: {
        title: this.state.alarm.label,
      },
      trigger: {
        weekday: weekday,
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds(),
        repeats: true,
      },
    });

    if(id) {
      let alarm = this.state.alarm;
      alarm.notificationId = id;
      this.setState({ alarm }, async () => {
        alarms[alarmIndex] = alarm;
        await AsyncStorage.setItem('alarms', JSON.stringify(alarms));
        DeviceEventEmitter.emit('success', true);

        this.props.navigation.navigate('AlarmList');
      });  
    }
  }

  async deleteAlarm(notifcationId) {
    let storedAlarms = await AsyncStorage.getItem('alarms');
    let alarms = JSON.parse(storedAlarms)
    let alarmMap = alarms.map(alarm => alarm.notificationId);
    let alarmIndex = alarmMap.indexOf(notifcationId);
    let deletedAlarm = alarms.splice(alarmIndex, 1);

    if(deletedAlarm) {
      AsyncStorage.setItem('alarms', JSON.stringify(alarms));
      DeviceEventEmitter.emit('success', true);
      await Notifications.cancelScheduledNotificationAsync(notifcationId);

      this.props.navigation.navigate('AlarmList');
    }
  }

  render() {
    let time = this.state.alarm.time;
    let day = this.state.alarm.day;
    let label = this.state.alarm.label;
    return (
      <View style={ styles.container}>
        <View style={ styles.card }>
          <TouchableOpacity style={ styles.row } onPress={() => this.props.navigation.navigate('EditAlarmTime', {time} )}>
            <Text style={ styles.label }>Time</Text>
            <Text style={ styles.desc }> {this.state.alarm.time.hour} : {this.state.alarm.time.min} {" "}
              <Icon
                name="chevron-right"
                size={14}
                color="#666666"/>
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={ styles.row } onPress={() => this.props.navigation.navigate('EditAlarmRepeat', {day})}>
            <Text style={ styles.label }>Day</Text>
            <Text style={ styles.desc }>
              {this.state.alarm.day == 'sunday' ? 
              <Text>Sunday{" "}</Text> : null
              }
              {this.state.alarm.day == 'monday' ? 
              <Text>Monday{" "}</Text> : null
              }
              {this.state.alarm.day == 'tuesday' ? 
              <Text>Tuesday{" "}</Text> : null
              }
              {this.state.alarm.day == 'wednesday' ? 
              <Text>Wednesday{" "}</Text> : null
              } 
              {this.state.alarm.day == 'thursday' ? 
              <Text>Thursday{" "}</Text> : null
              } 
              {this.state.alarm.day == 'friday' ? 
              <Text>Friday{" "}</Text> : null
              } 
              {this.state.alarm.day == 'saturday' ? 
              <Text>Saturday{" "}</Text> : null
              } 
              <Icon
                name="chevron-right"
                size={14}
                color="#666666"/>
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={ styles.row } onPress={() => this.props.navigation.navigate('EditAlarmLabel', {label})}>
            <Text style={ styles.label }>Label</Text>
            <Text style={ styles.desc }>{this.state.alarm.label}{" "}
              <Icon
                name="chevron-right"
                size={14}
                color="#666666"/>
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={ styles.lastRow } onPress={() => this.props.navigation.navigate('EditAlarmDismiss')}>
            <Text style={ styles.label }>Dismissal Method</Text>
            <Text style={ styles.desc }>Single Tap {" "}
              <Icon
                name="chevron-right"
                size={14}
                color="#666666"/>
            </Text>
          </TouchableOpacity>
        </View>
        <View style={[ styles.saveContainer ]}>
          <TouchableOpacity style={[ styles.saveButton ]} onPress={() => { this.save(this.state.alarm.notificationId) }}>
            <Text style={ styles.save }>Save</Text>
          </TouchableOpacity>          
        </View>
        <View style={ styles.space }>
          <TouchableOpacity style={ styles.deleteButton } onPress={ () =>
            Alert.alert(
              "Delete Confirmation",
              "Are you sure you want to delete this alarm?",
              [
                {
                  text: "Cancel",
                },
                { text: "Yes", 
                  onPress: () => this.deleteAlarm(this.state.alarm.notificationId),
                  style: "destructive",
                }
              ]
            )
          }>
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
  saveContainer: {
    flexDirection: 'row-reverse',
    marginTop: 10
  },
  saveButton: {
    alignItems: 'center',
    width: 80,
    borderRadius: 10,
    backgroundColor: '#0096FF',
    padding: 10
  }, 
  save: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
  },
  space: {
    paddingTop: 250
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