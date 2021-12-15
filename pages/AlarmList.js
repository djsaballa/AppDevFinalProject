import React, { Component } from "react";
import { View, Text, Button } from 'react-native';

class AlarmList extends Component {
    render() {
        return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Alarm</Text>
            <Button
            title="Add Alarm"
            onPress={() =>
                this.props.navigation.navigate('AddAlarm')
            }
            />
        </View>
        );
    }
}
    
export default AlarmList;