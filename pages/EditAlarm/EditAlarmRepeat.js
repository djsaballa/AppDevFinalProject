import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class EditAlarmRepeat extends Component {
  constructor() {
    super()

      this.state = {
        day: 'sunday'
    };
  }

  componentDidMount() {
    if(this.props.route.params.day && this.props.route.params.day != this.state.day) {
      let day = this.props.route.params.day;
      this.setState({ day })
    }
  }

  save() {
    let day = this.state.day;
  
    this.props.navigation.navigate('EditAlarm', {day})
  }

  render() {
    return (
      <View style={ styles.container}>
        <View style={ styles.card }>
          <TouchableOpacity style={[ styles.row, styles.selected ]} onPress={() => { this.setState({ day: 'sunday' }); }}>
            <Text style={ styles.input }>Every Sunday</Text>
            {this.state.day == 'sunday' ? 
              <Icon
                  name="check-circle"
                  size={18}
                  color="orange"/>: null
            }
          </TouchableOpacity>
          <TouchableOpacity style={[ styles.row, styles.selected ]} onPress={() => { this.setState({ day: 'monday' }); }}>
            <Text style={ styles.input }>Every Monday</Text>
            {this.state.day == 'monday' ? 
              <Icon
                  name="check-circle"
                  size={18}
                  color="orange"/>: null
            }
          </TouchableOpacity>
          <TouchableOpacity style={[ styles.row, styles.selected ]} onPress={() => { this.setState({ day: 'tuesday' }); }}>
            <Text style={ styles.input }>Every Tuesday</Text>
            {this.state.day == 'tuesday' ? 
              <Icon
                  name="check-circle"
                  size={18}
                  color="orange"/>: null
            }
          </TouchableOpacity>
          <TouchableOpacity style={[ styles.row, styles.selected ]} onPress={() => { this.setState({ day: 'wednesday' }); }}>
            <Text style={ styles.input }>Every Wednesday</Text>
            {this.state.day == 'wednesday' ? 
              <Icon
                  name="check-circle"
                  size={18}
                  color="orange"/>: null
            }
          </TouchableOpacity>
          <TouchableOpacity style={[ styles.row, styles.selected ]} onPress={() => { this.setState({ day: 'thursday' }); }}>
            <Text style={ styles.input }>Every Thursday</Text>
            {this.state.day == 'thursday' ? 
              <Icon
                  name="check-circle"
                  size={18}
                  color="orange"/>: null
            }
          </TouchableOpacity>
          <TouchableOpacity style={[ styles.row, styles.selected ]} onPress={() => { this.setState({ day: 'friday' }); }}>
            <Text style={ styles.input }>Every Friday</Text>
            {this.state.day == 'friday' ? 
              <Icon
                  name="check-circle"
                  size={18}
                  color="orange"/>: null
            }
          </TouchableOpacity>
          <TouchableOpacity style={[ styles.lastRow, styles.selected ]} onPress={() => { this.setState({ day: 'saturday' }); }}>
            <Text style={ styles.input }>Every Saturday</Text>
            {this.state.day == 'saturday' ? 
              <Icon
                  name="check-circle"
                  size={18}
                  color="orange"/>: null
            }
          </TouchableOpacity>
        </View>
        <View style={[ styles.saveContainer ]}>
          <TouchableOpacity style={[ styles.saveButton ]} onPress={() => { this.save() }}>
            <Text style={ styles.input }>Save</Text>
          </TouchableOpacity>          
        </View>
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
    backgroundColor: "#212121",
    borderRadius: 10,
    marginBottom: 10
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
    fontWeight: '500',
    color: 'white'
  },
  selected: {
    flexDirection: 'row',
    justifyContent: 'space-between'
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
  }
});