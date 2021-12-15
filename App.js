import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AlarmList from './pages/AlarmList';
import AddAlarm from './pages/AddAlarm';

const Stack = createStackNavigator();

export default class App extends Component{
  render() {
    return (
       <NavigationContainer>
         <StatusBar style="auto" />
         <Stack.Navigator initialRouteName="Alarm">
          <Stack.Screen name="AlarmList" component={AlarmList} options={{ title: 'Alarm' }} />
          <Stack.Screen name="AddAlarm" component={AddAlarm} />
        </Stack.Navigator>
       </NavigationContainer>
    );
  }
}