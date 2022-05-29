import React, { Component }  from 'react';
import { StyleSheet, View, ScrollView, Text, TouchableOpacity, DeviceEventEmitter, Animated } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ToggleSwitch from '../components/ToggleSwitch'
import Icon from 'react-native-vector-icons/FontAwesome';
import { AntDesign } from '@expo/vector-icons';

export default class AlarmList extends Component {  
  constructor() {
    super()

      this.state = {
        alarms: [],
        edit: false, 
        animateToggle: new Animated.Value(1),
        animateEdit: new Animated.Value(0),
    }
  }

  componentDidMount() {
    this.loadAlarms();
    this.reloadAlarm();
  }

  componentWillUnmount() {
    DeviceEventEmitter.removeAllListeners();
  }

  async loadAlarms() {
    let storedAlarms = await AsyncStorage.getItem('alarms'); 

    if(storedAlarms) {
      let alarms = JSON.parse(storedAlarms);
      alarms.sort(this.compare);
      this.setState({ alarms });
    }
  }

  async reloadAlarm() {
    DeviceEventEmitter.addListener('success', async (data) => {
      this.setState({ edit: false })
      this.loadAlarms();
    });
  }

  compare(a,b) {
    if (a.time.hour === b.time.hour){
       return (b.time.min - a.time.min);
    } else if(a.time.hour > b.time.hour){
       return 1;
    } else if(a.time.hour < b.time.hour){
       return -1;
    }
  }

  animation1() {
    Animated.parallel([
      Animated.timing(this.state.animateToggle, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true
      }),
      Animated.timing(this.state.animateEdit, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true
      })
    ]).start();
  }

  animation2() {
    Animated.parallel([
      Animated.timing(this.state.animateToggle, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true
      }),
      Animated.timing(this.state.animateEdit, {
        toValue: 0,
        duration: 5000,
        useNativeDriver: true
      })
    ]).start();
  }

  render() {
    return (
      <ScrollView style={ styles.container } stickyHeaderIndices={[0]}>
        <View>
          <View style={styles.header}>
            {this.state.edit ?
              <TouchableOpacity onPress={() => { this.setState(({ edit }) => ({ edit: !edit }), () => {
                this.animation2();
              }); }}>
                <Text style={ styles.headerTextLeft }>
                  Done
                </Text>
              </TouchableOpacity>
              :
              <TouchableOpacity onPress={() => { this.setState(({ edit }) => ({ edit: !edit }), () => {
                this.animation1();
              }); }}>
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
                <Animated.View style={{ 
                  transform: [
                  {
                    translateX: this.state.animateToggle.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0 , 500]
                    })
                  }
                  ],
                }}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('EditAlarm', {alarm})}>
                    <View style={styles.editContainer}>
                      <Icon
                      name="chevron-right"
                      size={18}
                      color="#666666"/>
                      </View>
                  </TouchableOpacity>
                </Animated.View>
                :
                <Animated.View style={{ opacity:this.state.animateToggle }}>
                  <View style={styles.toggleSwitch} >
                    <ToggleSwitch alarm={alarm} />
                  </View>
                </Animated.View>
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
    fontSize: 65,
    fontWeight: '300',
    color: 'white'
  },
  desc: {
    paddingLeft: 20,
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