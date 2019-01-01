import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,StatusBar,TouchableHighlight} from 'react-native';
import {Actions} from 'react-native-router-flux';
export default class FirstComponent extends Component {

  render() {
    return (
      <View>
        <StatusBar
                backgroundColor="#0c4229"
                barStyle="light-content"
        />
        <Text>Hello</Text>
        <TouchableHighlight
        onPress={() => { Actions.second(); }}>                    
        <Text >See everything!</Text></TouchableHighlight>
      </View>
    );
  }
}