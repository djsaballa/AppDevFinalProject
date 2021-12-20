import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Text, TouchableOpacity, Easing } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators, HeaderStyleInterpolators } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import AlarmList from './pages/AlarmList';
import AddAlarm from './pages/AddAlarm';
import AddAlarmTime from './pages/AddAlarm/AddAlarmTime';
import AddAlarmRepeat from './pages/AddAlarm/AddAlarmRepeat';
import AddAlarmLabel from './pages/AddAlarm/AddAlarmLabel';
import AddAlarmSound from './pages/AddAlarm/AddAlarmSound';
import AddAlarmDismiss from './pages/AddAlarm/AddAlarmDismiss';
import EditAlarm from './pages/EditAlarm';
import EditAlarmTime from './pages/EditAlarm/EditAlarmTime';
import EditAlarmRepeat from './pages/EditAlarm/EditAlarmRepeat';
import EditAlarmLabel from './pages/EditAlarm/EditAlarmLabel';
import EditAlarmSound from './pages/EditAlarm/EditAlarmSound';
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
                <TouchableOpacity onPress={() => navigation.navigate('EditAlarm') } >
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
            name="AddAlarmSound" 
            component={AddAlarmSound} 
            options={({navigation}) => ({
              title: 'Sound', 
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
              ),
              headerRight: () => (
                <TouchableOpacity onPress={() => alert('Alarm has been saved') } >
                  <Text style = {{ fontSize: 18, color:"orange", paddingRight: 10, fontWeight:"400" }}> Save </Text>
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
            name="EditAlarmSound" 
            component={EditAlarmSound} 
            options={({navigation}) => ({
              title: 'Sound', 
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

