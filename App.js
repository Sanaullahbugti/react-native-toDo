import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from 'react-navigation';
import Dashboard from './dashboard';
import Splash from './splash'
const Stackapp =createStackNavigator({
  Splash:{
    screen:Splash
  },
  Dashboard:{screen:Dashboard,navigationOptions:{
    header:null
  }}
});
export default class App extends React.Component {
  render() {
    return (
      <Stackapp/>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});