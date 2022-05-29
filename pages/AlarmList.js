import React, { Component }  from 'react';
import { StyleSheet, View, ScrollView, Text, TouchableOpacity, DeviceEventEmitter } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ToggleSwitch from '../components/ToggleSwitch'
import Icon from 'react-native-vector-icons/FontAwesome';
import { AntDesign } from '@expo/vector-icons';

export default class AlarmList extends Component {  
  constructor() {
    super()

      this.state = {
        alarms: [],
        edit: false
    }
  }

  componentDidMount() {
    this.loadAlarms();
    this.reloadAlarm();
  }

  componentWillUnmount() {
    DeviceEventEmitter.removeAllListeners();
  }

  // componentDidUpdate() {
  //   if(this.props.route.params.edit && this.props.route.params.edit != this.state.edit) {
  //     let edit = this.state.edit;
  //     this.setState({ edit });
  //   }
  // }

  async loadAlarms() {
    let storedAlarms = await AsyncStorage.getItem('alarms'); 

    if(storedAlarms) {
      let alarms = JSON.parse(storedAlarms);
      this.setState({ alarms });
    }
  }

  async reloadAlarm() {
    DeviceEventEmitter.addListener('success', async (data) => {
      this.loadAlarms();
    });
  }

  render() {
    return (
      <ScrollView style={ styles.container } stickyHeaderIndices={[0]}>
        <View>
          <View style={styles.header}>
            {this.state.edit ?
              <TouchableOpacity onPress={() => { this.setState(({ edit }) => ({ edit: !edit })); }}>
              <Text style={ styles.headerTextLeft }>
                Done
              </Text>
            </TouchableOpacity>
            :
            <TouchableOpacity onPress={() => { this.setState(({ edit }) => ({ edit: !edit })); }}>
              <Text style={ styles.headerTextLeft }>
                Edit
              </Text>
            </TouchableOpacity>
            }
            
            <Text style={ styles.headerTitle }> Alarm </Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('AddAlarm')}>
              <View style={ styles.headerTextRight }>
                <AntDesign name="plus" size={22} color="orange" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
       {this.state.alarms.map((alarm) => {
          let label = alarm.label;
          let time = alarm.time.hour + ':' + alarm.time.min;
          let day = alarm.day;
          return(
            <View style={ styles.row }>
              <View style={ styles.alarm }>
                <Text style={ styles.time }> { time } </Text>
                <Text style={ styles.desc }> 
                  { label },{" "}
                  {day == 'sunday' ? 
                    <Text>Sunday{" "}</Text> : null
                  }
                  {day == 'monday' ? 
                    <Text>Monday{" "}</Text> : null
                  }
                  {day == 'tuesday' ? 
                    <Text>Tuesday{" "}</Text> : null
                  }
                  {day == 'wednesday' ? 
                    <Text>Wednesday{" "}</Text> : null
                  } 
                  {day == 'thursday' ? 
                    <Text>Thursday{" "}</Text> : null
                  } 
                  {day == 'friday' ? 
                    <Text>Friday{" "}</Text> : null
                  } 
                  {day == 'saturday' ? 
                    <Text>Saturday{" "}</Text> : null
                  }  
                </Text>
              </View>
              {this.state.edit ? 
                <TouchableOpacity onPress={() => this.props.navigation.navigate('EditAlarm', {alarm})}>
                  <View style={styles.editContainer}> 
                    <Icon
                    name="chevron-right"
                    size={20}
                    color="#666666"/>
                    </View>
                </TouchableOpacity>
                :
                <View style={styles.toggleSwitch} >
                  <ToggleSwitch alarm={alarm} />
                </View>
              }
            </View>
          );
        })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
 },
  header: {
    height: 90,
    width: '100%',
    backgroundColor: '#0f0f0f', 
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 50,
    padding: 10, 
  },
  headerTitle: {
    fontSize: 18, 
    color:"white",
    fontWeight:"600"
  },
  headerTextLeft: {
    fontSize: 18, 
    color:"orange", 
    paddingLeft: 10, 
    fontWeight:"400"
  },
  headerTextRight: {
    paddingRight: 10, 
  },
  row: {
    flex: 1,
    padding: 8,
    paddingBottom: 20,
    borderBottomWidth: .2,
    borderColor: '#666666',
    flexDirection: 'row',
    alignItems: 'center',    
    justifyContent:'space-between',
  },
  alarm: {
    fontSize: 50,
    fontWeight: '300',
    color: 'white'
  },
  time: {
    fontSize: 50,
    fontWeight: '300',
    color: 'white'
  },
  desc: {
    paddingLeft: 8,
    fontSize: 14,
    fontWeight: '400',
    color: 'white'
  },
  toggleSwitch: {
    paddingRight: 15,
  },
  editContainer: {
    paddingRight: 10
  }
});