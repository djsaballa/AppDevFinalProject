import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

export default class AddAlarmLabel extends Component {
  constructor() {
    super()

    this.state = {
      label: 'Alarm',
    };
  }

  componentDidMount() {
    if(this.props.route.params.label && this.props.route.params.day != this.state.label) {
      let label = this.props.route.params.label;
      this.setState({ label })
    }
  }

  save() { 
    let label = this.state.label;
    this.props.navigation.navigate('AddAlarm', {label})
  }

  render() {
    return (
      <View style={ styles.container}>
        <View style={ styles.card }>
          <View style={ styles.row }>
            <TextInput 
              style={ styles.input }
              placeholder= {this.state.label}
              placeholderTextColor= '#666666'
              selectionColor= 'orange'
              onChangeText={(val) => {
                this.setState({ label: val })
              }}
              returnKeyType="done"
              onSubmitEditing={ () => this.save() }
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
    borderRadius: 10
  },
  row: {
    padding: 15,
  },
  input: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white'
  },
  saveContainer: {
    flexDirection: 'row-reverse',
    marginTop: 10
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