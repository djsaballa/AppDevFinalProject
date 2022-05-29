import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Text, TouchableOpacity, Easing, DeviceEventEmitter } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators, HeaderStyleInterpolators } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';

import AlarmList from './pages/AlarmList';
import AddAlarm from './pages/AddAlarm';
import AddAlarmTime from './pages/AddAlarm/AddAlarmTime';
import AddAlarmRepeat from './pages/AddAlarm/AddAlarmRepeat';
import AddAlarmLabel from './pages/AddAlarm/AddAlarmLabel';
import AddAlarmDismiss from './pages/AddAlarm/AddAlarmDismiss';
import EditAlarm from './pages/EditAlarm';
import EditAlarmTime from './pages/EditAlarm/EditAlarmTime';
import EditAlarmRepeat from './pages/EditAlarm/EditAlarmRepeat';
import EditAlarmLabel from './pages/EditAlarm/EditAlarmLabel';
import EditAlarmDismiss from './pages/EditAlarm/EditAlarmDismiss';

const Stack = createStackNavigator();
const config = {
  animation: 'timing',
  config: {
    duration: 250,
    easing: Easing.linear
  },
};

export default class App extends Component{
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
        day: 'sunday'
      }
    };
  }

  componentDidMount() {
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true
      })
    });

    this.getPermission();

    DeviceEventEmitter.addListener('add-alarm', async (data) => {
      if (data) {
        let alarm = this.state.alarm ;
        alarm = data;
        this.setState({ alarm }, async () => {
          let newList = [];
          let prevInput = await AsyncStorage.getItem('alarms');
          if (prevInput) {
            let parsedInput = JSON.parse(prevInput);
            newList = parsedInput;
          }

          let days = [
            'sunday',
            'monday',
            'tuesday',
            'wednesday',
            'thursday',
            'friday',
            'saturday'
          ]
          let weekday = days.indexOf(alarm.day) + 1; 
          let time = new Date();
          time.setHours(alarm.time.hour);
          time.setMinutes(alarm.time.min);
          time.setSeconds(0);

          let notifcationId = await Notifications.scheduleNotificationAsync({
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

          if(notifcationId) {
            let alarm = this.state.alarm;
            alarm.notificationId = notifcationId;
            this.setState({ alarm }, async () => {
              newList.push(this.state.alarm);
              await AsyncStorage.setItem('alarms', JSON.stringify(newList));
              DeviceEventEmitter.emit('success', true);
            });  
          }
        });
      } else {
        console.log('empty')
      }
    });
  }

  componentWillUnmount() {
    DeviceEventEmitter.removeAllListeners();
  }

  async getPermission() {
    if (Device.isDevice) {
        const { status: existingStatus } = await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;
        if (existingStatus !== 'granted') {
          const { status } = await Notifications.requestPermissionsAsync();
          finalStatus = status;
        }
        if (finalStatus !== 'granted') {
          alert('Enable push notifications to use the app!');
          return;
        }
    } else {
      alert('Must use physical device for Push Notifications');
    }

      if (Platform.OS === 'android') {
        Notifications.setNotificationChannelAsync('default', {
          name: 'default',
          importance: Notifications.AndroidImportance.MAX,
          vibrationPattern: [0, 250, 250, 250],
          lightColor: '#FF231F7C',
        });
      }
  }
  
  render() {
    return (
      <NavigationContainer>
        <StatusBar style="light" />
        <Stack.Navigator 
          initialRouteName="Alarm"
          screenOptions={{
            headerMode: 'screen',
            transitionSpec: {
              open: config,
              close: config
            }
          }}
        >
          <Stack.Screen 
            name="AlarmList" 
            component={AlarmList} 
            options={({navigation}) => ({
              headerShown: false,
              // title: 'Alarm',
              // headerTintColor: 'white',
              // headerStyle: {
              //   backgroundColor: '#0f0f0f',
              //   shadowColor: 'transparent'
              // },
              // headerLeft: () => (
              //   <TouchableOpacity onPress={() => navigation.navigate('EditAlarm') } >
              //     <Text style = {{ fontSize: 18, color:"orange", paddingLeft: 10, fontWeight:"400" }}> Edit </Text>
              //   </TouchableOpacity>
              // ),
              // headerRight: () => (
              //   <TouchableOpacity onPress={() => navigation.navigate('AddAlarm') } >
              //     <Text style = {{ fontSize: 35, color:"orange", paddingRight: 10, fontWeight:"200" }}> + </Text>
              //   </TouchableOpacity>
              // )
            })}
          />
          <Stack.Screen 
            name="AddAlarm" 
            component={AddAlarm} 
            options={({navigation}) => ({
              title: 'Add Alarm' ,
              gestureEnabled: true,
              gestureDirection: 'vertical',
              headerStyleInterpolators:  HeaderStyleInterpolators.forUIKit,
              cardStyleInterpolator: CardStyleInterpolators.forBottomSheetAndroid,
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: '#0f0f0f',
                shadowColor: 'transparent'
              },
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.navigate('AlarmList') } >
                  <Text style = {{ fontSize: 18, color:"orange", paddingLeft: 10, fontWeight:"400" }}> Cancel </Text>
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen 
            name="AddAlarmTime" 
            component={AddAlarmTime} 
            options={({navigation}) => ({
              title: 'Time', 
              gestureEnabled: true,
              gestureDirection: 'horizontal',
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: '#0f0f0f',
                shadowColor: 'transparent'
              },
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack() } >
                  <Text style = {{ fontSize: 18, color:"orange", paddingLeft: 10, fontWeight:"400" }}> 
                    <Icon
                      name="chevron-left"
                      size={14}
                      color="orange"/>
                    {" "} Back 
                  </Text>
                </TouchableOpacity>
              )
            })} 
          />
          <Stack.Screen 
            name="AddAlarmRepeat" 
            component={AddAlarmRepeat} 
            options={({navigation}) => ({
              title: 'Repeat', 
              gestureEnabled: true,
              gestureDirection: 'horizontal',
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: '#0f0f0f',
                shadowColor: 'transparent'
              },
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack() } >
                  <Text style = {{ fontSize: 18, color:"orange", paddingLeft: 10, fontWeight:"400" }}> 
                    <Icon
                      name="chevron-left"
                      size={14}
                      color="orange"/>
                    {" "} Back 
                  </Text>
                </TouchableOpacity>
              )
            })}           
          />
          <Stack.Screen 
            name="AddAlarmLabel"  
            component={AddAlarmLabel} 
            options={({navigation}) => ({
              title: 'Label', 
              gestureEnabled: true,
              gestureDirection: 'horizontal',
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: '#0f0f0f',
                shadowColor: 'transparent'
              },
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack() } >
                  <Text style = {{ fontSize: 18, color:"orange", paddingLeft: 10, fontWeight:"400" }}> 
                    <Icon
                      name="chevron-left"
                      size={14}
                      color="orange"/>
                    {" "} Back 
                  </Text>
                </TouchableOpacity>
              )
            })}
          />
          <Stack.Screen 
            name="AddAlarmDismiss" 
            component={AddAlarmDismiss} 
            options={({navigation}) => ({
              title: 'Dismissal Method', 
              gestureEnabled: true,
              gestureDirection: 'horizontal',
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: '#0f0f0f',
                shadowColor: 'transparent'
              },
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack() } >
                  <Text style = {{ fontSize: 18, color:"orange", paddingLeft: 10, fontWeight:"400" }}> 
                    <Icon
                      name="chevron-left"
                      size={14}
                      color="orange"/>
                    {" "} Back 
                  </Text>
                </TouchableOpacity>
              )
            })}           
          />
          <Stack.Screen 
            name="EditAlarm" 
            component={EditAlarm} 
            options={({navigation}) => ({
              title: 'Edit Alarm' ,
              gestureEnabled: true,
              gestureDirection: 'vertical',
              headerStyleInterpolators:  HeaderStyleInterpolators.forUIKit,
              cardStyleInterpolator: CardStyleInterpolators.forBottomSheetAndroid,
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: '#0f0f0f',
                shadowColor: 'transparent'
              },
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.navigate('AlarmList') } >
                  <Text style = {{ fontSize: 18, color:"orange", paddingLeft: 10, fontWeight:"400" }}> Cancel </Text>
                </TouchableOpacity>
              )
            })}
          />
          <Stack.Screen 
            name="EditAlarmTime" 
            component={EditAlarmTime} 
            options={({navigation}) => ({
              title: 'Time', 
              gestureEnabled: true,
              gestureDirection: 'horizontal',
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: '#0f0f0f',
                shadowColor: 'transparent'
              },
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack() } >
                  <Text style = {{ fontSize: 18, color:"orange", paddingLeft: 10, fontWeight:"400" }}> 
                    <Icon
                      name="chevron-left"
                      size={14}
                      color="orange"/>
                    {" "} Back 
                  </Text>
                </TouchableOpacity>
              )
            })} 
          />
          <Stack.Screen 
            name="EditAlarmRepeat" 
            component={EditAlarmRepeat} 
            options={({navigation}) => ({
              title: 'Repeat', 
              gestureEnabled: true,
              gestureDirection: 'horizontal',
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: '#0f0f0f',
                shadowColor: 'transparent'
              },
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack() } >
                  <Text style = {{ fontSize: 18, color:"orange", paddingLeft: 10, fontWeight:"400" }}> 
                    <Icon
                      name="chevron-left"
                      size={14}
                      color="orange"/>
                    {" "} Back 
                  </Text>
                </TouchableOpacity>
              )
            })}           
          />
          <Stack.Screen 
            name="EditAlarmLabel"  
            component={EditAlarmLabel} 
            options={({navigation}) => ({
              title: 'Label', 
              gestureEnabled: true,
              gestureDirection: 'horizontal',
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: '#0f0f0f',
                shadowColor: 'transparent'
              },
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack() } >
                  <Text style = {{ fontSize: 18, color:"orange", paddingLeft: 10, fontWeight:"400" }}> 
                    <Icon
                      name="chevron-left"
                      size={14}
                      color="orange"/>
                    {" "} Back 
                  </Text>
                </TouchableOpacity>
              )
            })}
          />
          <Stack.Screen 
            name="EditAlarmDismiss" 
            component={EditAlarmDismiss} 
            options={({navigation}) => ({
              title: 'Dismissal Method', 
              gestureEnabled: true,
              gestureDirection: 'horizontal',
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: '#0f0f0f',
                shadowColor: 'transparent'
              },
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack() } >
                  <Text style = {{ fontSize: 18, color:"orange", paddingLeft: 10, fontWeight:"400" }}> 
                    <Icon
                      name="chevron-left"
                      size={14}
                      color="orange"/>
                    {" "} Back 
                  </Text>
                </TouchableOpacity>
              )
            })}           
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

