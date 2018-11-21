import React, {Component} from 'react';
import {StyleSheet, Text, View,TextInput,TouchableOpacity} from 'react-native';
import {DrawerNavigator} from 'react-navigation';
import r1daydir1 from '@components/r1daydir1';
import r1daydir2 from '@components/r1daydir2';
import r1eveningdir1 from '@components/r1eveningdir1';
import r1eveningdir2 from '@components/r1eveningdir2';
import r2daydir1 from '@components/r2daydir1';
import r3daydir1 from '@components/r3daydir1';
import Sidebar from '@components/Sidebar';

export default class App extends Component {
  render() {
     return (
       <AppStack />
     );
   }
}

const AppStack = DrawerNavigator({
  r1daydir1: {screen: r1daydir1},
  r1daydir2: {screen: r1daydir2},
  r1eveningdir1: {screen: r1eveningdir1},
  r1eveningdir2: {screen: r1eveningdir2},
  r2daydir1: {screen: r2daydir1},
  r3daydir1: {screen: r3daydir1}


},{
  contentComponent: ({navigation}) => <Sidebar navigation={navigation} />
})
