import React, { Component }  from 'react';
import { StyleSheet, View, Text, TouchableOpacity, DeviceEventEmitter } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class AddAlarm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      alarm: {
        label: 'Alarm',
        time: {
          hour: '00 - 23',
          min: '00 - 59'
        },
        enabled: true,
        dismissMethod: 'default',
        day:'sunday'
      }
    };
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

  save() {
    DeviceEventEmitter.emit('add-alarm', this.state.alarm);

    this.props.navigation.navigate('AlarmList');
  }

  render() {
    let time = this.state.alarm.time;
    let day = this.state.alarm.day;
    let label = this.state.alarm.label;
    return (
      <View style={ styles.container}>
        <View style={ styles.card }>
          <TouchableOpacity style={ styles.row } onPress={() => this.props.navigation.navigate('AddAlarmTime', {time})}>
            <Text style={ styles.label }>Time</Text>
            <Text style={ styles.desc }> 
              {this.state.alarm.time.hour == '00 - 23' ?
                <Text style={ styles.desc }> 
                  00 : 00{" "}
                  <Icon
                  name="chevron-right"
                  size={14}
                  color="#666666"/>
                </Text>
                    :
                <Text style={ styles.desc }> 
                  {this.state.alarm.time.hour} : {this.state.alarm.time.min} {" "}
                  <Icon
                  name="chevron-right"
                  size={14}
                  color="#666666"/>
                </Text>
              }
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={ styles.row } onPress={() => this.props.navigation.navigate('AddAlarmRepeat', {day})}>
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
          <TouchableOpacity style={ styles.row } onPress={() => this.props.navigation.navigate('AddAlarmLabel', {label})}>
            <Text style={ styles.label }>Label</Text>
            <Text style={ styles.desc }>{this.state.alarm.label}{" "}
              <Icon
                name="chevron-right"
                size={14}
                color="#666666"/>
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={ styles.lastRow } onPress={() => this.props.navigation.navigate('AddAlarmDismiss')}>
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
          <TouchableOpacity style={[ styles.saveButton ]} onPress={() => { this.save() }}>
            <Text style={ styles.save }>Save</Text>
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
  }
});