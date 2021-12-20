import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class AddAlarmSound extends Component {
  render() {
    return (
      <View style={ styles.container}>
        <ScrollView>
          <View style={ styles.card }>
            <TouchableOpacity style={ styles.row } >
              <Text style={ styles.input }>Alarm (Default)</Text>
            </TouchableOpacity>
            <TouchableOpacity style={ styles.row } >
              <Text style={ styles.input }>Radar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={ styles.row } >
              <Text style={ styles.input }>Bulletin</Text>
            </TouchableOpacity>
            <TouchableOpacity style={ styles.row } >
              <Text style={ styles.input }>Beacon</Text>
            </TouchableOpacity>
            <TouchableOpacity style={ styles.row } >
              <Text style={ styles.input }>Illusion:</Text>
            </TouchableOpacity>
            <TouchableOpacity style={ styles.row } >
              <Text style={ styles.input }>Mahal</Text>
            </TouchableOpacity>
            <TouchableOpacity style={ styles.row } >
              <Text style={ styles.input }>Ka</Text>
            </TouchableOpacity>
            <TouchableOpacity style={ styles.row } >
              <Text style={ styles.input }>Ng</Text>
            </TouchableOpacity>
            <TouchableOpacity style={ styles.row } >
              <Text style={ styles.input }>Mahal</Text>
            </TouchableOpacity>
            <TouchableOpacity style={ styles.row } >
              <Text style={ styles.input }>Mo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={ styles.row } >
              <Text style={ styles.input }>Apex</Text>
            </TouchableOpacity>
            <TouchableOpacity style={ styles.row } >
              <Text style={ styles.input }>Chimes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={ styles.row } >
              <Text style={ styles.input }>Chimes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={ styles.row } >
              <Text style={ styles.input }>Cosmic</Text>
            </TouchableOpacity>
            <TouchableOpacity style={ styles.row } >
              <Text style={ styles.input }>Crystals</Text>
            </TouchableOpacity>
            <TouchableOpacity style={ styles.row } >
              <Text style={ styles.input }>Hillside</Text>
            </TouchableOpacity>
            <TouchableOpacity style={ styles.row } >
              <Text style={ styles.input }>Illuminate</Text>
            </TouchableOpacity>
            <TouchableOpacity style={ styles.row } >
              <Text style={ styles.input }>Night Owl</Text>
            </TouchableOpacity>
            <TouchableOpacity style={ styles.row } >
              <Text style={ styles.input }>Opening</Text>
            </TouchableOpacity>
            <TouchableOpacity style={ styles.lastRow } >
              <Text style={ styles.input }>Circuit</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}
        
const styles = StyleSheet.create({  
  container: {
    flex: 1,
    paddingTop: 30,
    paddingRight: 20,
    paddingBottom: 60,
    paddingLeft: 20,
    backgroundColor: '#0f0f0f',
  },
  card: {
    justifyContent:'center',
    backgroundColor: "#212121",
    borderRadius: 10
  },
  row: {
    padding: 15,
    paddingLeft: 25,
    borderBottomWidth: .2,
    borderColor: '#666666',
  },
  lastRow: {
    padding: 15,
    paddingLeft: 25,
    borderColor: '#71797E',
  },
  input: {
    fontSize: 16,
    fontWeight: '400',
    color: 'white'
  },
});
    
