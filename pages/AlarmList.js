import React, { Component, useState }  from 'react';
import { StyleSheet, View, ScrollView, Switch, Text } from 'react-native';

class AlarmList extends Component {  
    render() {
        return (
            <ScrollView style={ styles.container }>
              <View style={ styles.row }>
                <View style={ styles.alarm }>
                  <Text style={ styles.time }> 08:00 </Text>
                  <Text style={ styles.desc }> Good morning 😘, Everday </Text>
                </View>
                <ToggleSwitch />
              </View>
              <View style={ styles.row }>
                <View style={ styles.alarm }>
                  <Text style={ styles.time }> 13:00 </Text>
                  <Text style={ styles.desc }> Kumain ka na ba?, Everday </Text>
                </View>
                <ToggleSwitch />
              </View>
              <View style={ styles.row }>
                <View style={ styles.alarm }>
                  <Text style={ styles.time }> 22:00 </Text>
                  <Text style={ styles.desc }> Sleep well ❤️, Everday </Text>
                </View>
                <ToggleSwitch />
              </View>
            </ScrollView>
        );
    }
}

const ToggleSwitch = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
    return (
      <View style={styles.toggleSwitch}>
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
        backgroundColor: '#141414',
    },
    row: {
        flex: 1,
        padding: 8,
        paddingBottom: 20,
        borderBottomWidth: .2,
        borderColor: '#71797E',
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
});

export default AlarmList;