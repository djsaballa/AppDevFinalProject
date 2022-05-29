import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class EditAlarmTime extends Component {
  constructor() {
    super()

      this.state = {
        hour: '00',
        min: '00'
    }
  }

  componentDidMount() {
    if((this.props.route.params.time.hour && this.props.route.params.time.hour != this.state.hour) || (this.props.route.params.time.min && this.props.route.params.time.min != this.state.min)) {
      let hour = this.props.route.params.time.hour;
      this.setState({ hour })

      let min = this.props.route.params.time.min;
      this.setState({ min })
    }
  }

  save() {
    let time = {
      hour: this.state.hour,
      min: this.state.min
  }

  this.props.navigation.navigate('EditAlarm', {time})
  }

  render() {
    return (
      <View style={ styles.container}>
        <View style={ styles.card }>
          <View style={ styles.row }>
            <Text style={ styles.label }> Hour: </Text>
            <TextInput 
              style={ styles.input }
              keyboardType = 'numeric'
              placeholder= {this.state.hour}
              placeholderTextColor= '#666666'
              selectionColor= 'orange'
              onChangeText={(val) => {
                this.setState({ hour: val })
              }}
            />
          </View>
        </View>
        <View style={ styles.card }>
          <View style={ styles.row }>
          <Text style={ styles.label }> Minute: </Text>
            <TextInput 
              style={ styles.input }
              keyboardType = 'numeric'
              placeholder= {this.state.min}
              placeholderTextColor= '#666666'
              selectionColor= 'orange'
              onChangeText={(val) => {
                this.setState({ min: val })
              }}
            />
          </View>
        </View>
        <View style={[ styles.saveContainer ]}>
          <TouchableOpacity style={[ styles.saveButton ]} onPress={() => { this.save() }}>
            <Text style={ styles.save }>Save</Text>
          </TouchableOpacity>          
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 130,
    justifyContent:'center',
    backgroundColor: '#0f0f0f',
  },
  card: {
    height: 50,
    backgroundColor: "#212121",
    borderRadius: 10,
    marginBottom: 10
  },
  row: {
    flexDirection: 'row',
    justifyContent:'space-between',
    padding: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white'
  },
  input: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
    paddingRight: 15,
  },
  saveContainer: {
    flexDirection: 'row-reverse',
  },
  saveButton: {
    alignItems: 'center',
    width: 80,
    borderRadius: 10,
    backgroundColor: '#0096FF',
    padding: 10
  }, 
  save: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
  }
});