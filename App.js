import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Text, TouchableOpacity, Easing } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators, HeaderStyleInterpolators } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import AlarmList from './pages/AlarmList';
import AddAlarm from './pages/AddAlarm';
import AlarmTimeSettings from './pages/AlarmTimeSettings';
import RepeatAlarmSettings from './pages/RepeatAlarmSettings';
import AlarmLabelSettings from './pages/AlarmLabelSettings';
import AlarmSoundSettings from './pages/AlarmSoundSettings';
import DismissAlarmSettings from './pages/DismissAlarmSettings';
import EditAlarm from './pages/EditAlarm';


const Stack = createStackNavigator();
const config = {
  animation: 'timing',
  config: {
    duration: 250,
    easing: Easing.linear
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
              title: 'Alarm',
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: '#0f0f0f',
                shadowColor: 'transparent'
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
              headerRight: () => (
                <TouchableOpacity onPress={() => alert('Alarm has been saved') } >
                  <Text style = {{ fontSize: 18, color:"orange", paddingRight: 10, fontWeight:"400" }}> Save </Text>
                </TouchableOpacity>
              )
            })}
          />
          <Stack.Screen name="Edit" component={EditAlarm} options={{ title: 'Edit Alarm' }}/>
          <Stack.Screen 
            name="AlarmTimeSettings" 
            component={AlarmTimeSettings} 
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
          <Stack.Screen name="RepeatAlarmSettings" 
            component={RepeatAlarmSettings} 
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
            name="AlarmLabelSettings"  
            component={AlarmLabelSettings} 
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
          <Stack.Screen name="AlarmSoundSettings" 
            component={AlarmSoundSettings} 
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
            name="DismissAlarmSettings" 
            component={DismissAlarmSettings} 
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
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

