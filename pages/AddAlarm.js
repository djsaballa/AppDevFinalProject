import React, { Component, useState }  from 'react';
import { StyleSheet, View, Switch, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class AddAlarm extends Component {
  render() {
    return (
        <View style={ styles.container}>
          <View style={ styles.card }>
            <TouchableOpacity style={ styles.row } onPress={() => this.props.navigation.navigate('AlarmTimeSettings')}>
              <Text style={ styles.label }>Time</Text>
              <Text style={ styles.desc }>13:00 {" "}
                <Icon
                  name="chevron-right"
                  size={14}
                  color="#666666"/>
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={ styles.row } onPress={() => this.props.navigation.navigate('RepeatAlarmSettings')}>
              <Text style={ styles.label }>Repeat</Text>
              <Text style={ styles.desc }>Never {" "}
                <Icon
                  name="chevron-right"
                  size={14}
                  color="#666666"/>
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={ styles.row } onPress={() => this.props.navigation.navigate('AlarmLabelSettings')}>
              <Text style={ styles.label }>Label</Text>
              <Text style={ styles.desc }>Alarm {" "}
                <Icon
                  name="chevron-right"
                  size={14}
                  color="#666666"/>
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={ styles.row } onPress={() => this.props.navigation.navigate('AlarmSoundSettings')}>
              <Text style={ styles.label }>Sound</Text>
              <Text style={ styles.desc }>Alarm {" "} 
                <Icon
                  name="chevron-right"
                  size={14}
                  color="#666666"/>
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={ styles.row } onPress={() => this.props.navigation.navigate('DismissAlarmSettings')}>
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

const ToggleSwitch = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
    return (
      <View>
        <Switch
          trackColor={{ false: "#3e3e3e", true: "#50C878" }}
          thumbColor="white"
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    );
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
        flex: .5,
        justifyContent:'center',
        backgroundColor: "#212121",
        borderRadius: 10
    },
    row: {
        flex: 1,
        padding: 15,
        borderBottomWidth: .2,
        borderColor: '#71797E',
        flexDirection: 'row',
        justifyContent:'space-between',
    },
    lastRow: {
        flex: 1,
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