import * as Device from 'expo-device';
import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState, useRef} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true
  })
});

export default function App() {
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    const getPermission = async () => {
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
          const token = (await Notifications.getExpoPushTokenAsync()).data;
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

    getPermission();

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {});

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  const onClick = async () => {
    let time = new Date();
    time.setHours(12);
    time.setMinutes(29);
    time.setSeconds(0);

    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Title",
        body: JSON.stringify(time),
        data: { data: "data goes here" }
      },
      trigger: {seconds: 2},
    });
    //await Notifications.cancelAllScheduledNotificationsAsync();
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onClick}>
        <Text style={{backgroundColor: 'red', padding: 10, color: 'white'}}>Click me to send a push notification</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});