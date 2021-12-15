import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from 'react-native';

class AlarmList extends Component {
    render() {
        return (
            <ScrollView style={ styles.screen }>
                <View style={ styles.topBar }>
                    <TouchableOpacity 
                        onPress={() =>
                            this.props.navigation.navigate('EditDeleteAlarm')
                    }>                     
                    <View>
                        <Text style={styles.navButtonText}>Edit</Text>
                    </View>
                  </TouchableOpacity> 
                  <TouchableOpacity 
                    onPress={() =>
                        this.props.navigation.navigate('AddAlarm')
                  }>                    
                    <View>
                        <Text style={styles.navButtonText}>+</Text>
                    </View>
                  </TouchableOpacity>
            </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'black',
    },
    topBar: {
        padding: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent:'space-between',
    },
    navButtonText: {
        fontSize: 18,
        color: 'orange',
    },
});
    
export default AlarmList;