import React, { Component } from "react";
import { View, Switch, DeviceEventEmitter } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Notifications from 'expo-notifications';

export default class ToggleSwitch extends Component {
  constructor(props) {
    super(props)

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
        day: 'sunday'
      }
    };
  }

  componentDidMount() {
    if(this.props.alarm && this.props.alarm.notificationId != this.state.alarm.notificationId) {
      let alarm = this.props.alarm
      this.setState({ alarm });
    }
  }

  render() {
    return (
      <View >
        <Switch
          trackColor={{ false: "#3e3e3e", true: "#50C878" }}
          thumbColor="white"
          ios_backgroundColor="#3e3e3e"
          onValueChange={ async (val) => {
            let alarm = this.state.alarm;
            alarm.enabled = val;
            this.setState({ alarm })

            let storedAlarms = await AsyncStorage.getItem('alarms');
            let alarms = JSON.parse(storedAlarms)
            let alarmMap = alarms.map(alarma => alarma.notificationId);
            let alarmIndex = alarmMap.indexOf(this.state.alarm.notificationId);

            if(this.state.alarm.enabled) {
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
                  title: alarm.label,
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
                alarm.notificationId = id;
                this.setState({ alarm }, async () => {
                  alarms[alarmIndex] = alarm;
                  await AsyncStorage.setItem('alarms', JSON.stringify(alarms));
                  DeviceEventEmitter.emit('success', true);
                  console.log('on')
                });  
              }
            } else {
              alarms[alarmIndex] = alarm;
              await AsyncStorage.setItem('alarms', JSON.stringify(alarms));
              DeviceEventEmitter.emit('success', true);
              await Notifications.cancelScheduledNotificationAsync(this.state.alarm.notificationId);
              console.log('off')
            }
          }}
          value={this.state.alarm.enabled}
        />
      </View>
    );
  }
}