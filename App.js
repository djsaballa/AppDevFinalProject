import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AlarmList from './pages/AlarmList';
import AddAlarm from './pages/AddAlarm';
import AlarmTimeSettings from './pages/AlarmTimeSettings';
import RepeatAlarmSettings from './pages/RepeatAlarmSettings';
import AlarmLabelSettings from './pages/AlarmLabelSettings';
import AlarmSoundSettings from './pages/AlarmSoundSettings';
import DismissAlarmSettings from './pages/DismissAlarmSettings';
import EditAlarm from './pages/EditAlarm';


const Stack = createStackNavigator();
const horizontalAnimation = {
  cardStyleInterpolator: ({ current, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
      },
    };
  },
};


export default class App extends Component{
  render() {
    return (
      <NavigationContainer>
        <StatusBar style="light" />
        <Stack.Navigator 
          initialRouteName="Alarm"
          screenOptions={{
            presentation: 'modal'
          }}
        >
          <Stack.Screen 
            name="AlarmList" 
            component={AlarmList} 
            options={({navigation}) => ({
              title: 'Alarm',
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: 'black',
              },
              headerLeft: () => (
                <TouchableOpacity onPress={() => alert("Editing") } >
                  <Text style = {{ fontSize: 18, color:"orange", paddingLeft: 10, fontWeight:"400" }}> Edit </Text>
                </TouchableOpacity>
              ),
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('AddAlarm') } >
                  <Text style = {{ fontSize: 35, color:"orange", paddingRight: 10, fontWeight:"200" }}> + </Text>
                </TouchableOpacity>
              )
            })}
          />
          <Stack.Screen 
            name="AddAlarm" 
            component={AddAlarm} 
            options={({navigation}) => ({
              title: 'Add Alarm' ,
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: 'black',
              },
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.navigate('AlarmList') } >
                  <Text style = {{ fontSize: 18, color:"orange", paddingLeft: 10, fontWeight:"400" }}> Cancel </Text>
                </TouchableOpacity>
              ),
              headerRight: () => (
                <TouchableOpacity onPress={() => alert('Alarm has been saved') } >
                  <Text style = {{ fontSize: 18, color:"orange", paddingRight: 10, fontWeight:"400" }}> Save </Text>
                </TouchableOpacity>
              )
            })}
          />
          <Stack.Screen name="Edit" component={EditAlarm} options={{ title: 'Edit Alarm' }}/>
          <Stack.Screen name="AlarmTimeSettings" component={AlarmTimeSettings} options={{title: 'Time', horizontalAnimation}} />
          <Stack.Screen name="RepeatAlarmSettings" component={RepeatAlarmSettings} options={{title: 'Repeat', horizontalAnimation}} />
          <Stack.Screen name="AlarmLabelSettings" component={AlarmLabelSettings} options={{title: 'Label', horizontalAnimation}} />
          <Stack.Screen name="AlarmSoundSettings" component={AlarmSoundSettings} options={{title: 'Sound', horizontalAnimation}} />
          <Stack.Screen name="DismissAlarmSettings" component={DismissAlarmSettings} options={{title: 'Dismissal Method', horizontalAnimation}} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

