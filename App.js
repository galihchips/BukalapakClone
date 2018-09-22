/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createStackNavigator, createSwitchNavigator,NavigationActions,StackActions,StackNavigator} from 'react-navigation';

import Icon from 'react-native-ionicons';

import HomeScreen from './src/HomeScreen';
import BukaMall from './src/BukaMall';
import Keranjang from './src/Keranjang';
import Transaksi from './src/Transaksi';
import Login from './src/Login';
import Akun from './src/Akun';
 
 
export default createMaterialBottomTabNavigator({
  Home : {
    screen :HomeScreen,
    navigationOptions:{
      showLabel : false, 
      tabBarIcon : ({tintColor}) => (
        <Icon name = 'egg' color={tintColor} size = {20} />
        )
    }
  },
  BukaMall :  {
    screen :BukaMall,
    navigationOptions:{
      tabBarIcon : ({ tintColor }) => (
        <Icon name = 'ribbon' color={tintColor} size = {20} />
        )
    }
  },
  
  Keranjang :  {
    screen :Keranjang,
    navigationOptions:{
      tabBarIcon : ({ tintColor }) => (
        <Icon name = 'cart' color={tintColor} size = {20} />
        )
    }
  },
  Transaksi :  {
    screen :Transaksi,
    navigationOptions:{
      tabBarIcon : ({ tintColor }) => (
        <Icon name = 'infinite' color={tintColor} size = {20} />
        )
    }
  },
  Akun : {
    screen : Akun,
    navigationOptions:{
      tabBarIcon : ({ tintColor }) => (
        <Icon name = 'person' color={tintColor} size = {20} />
        )
    }
  }
  },{
      initialRouteName : 'Home',
      activeTintColor :'#D8114B',
      showLabel : 'false',
      tabBarColor :'#fff',
  });



