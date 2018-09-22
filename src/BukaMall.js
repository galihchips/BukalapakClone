import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Container, Content ,Header, Left, Body, Right, Title, Subtitle, Input,Tab, Tabs, Item, Button, ScrollableTab } from 'native-base';

import Populer from './bukamallscreenn/Populer';
import Fashion from './bukamallscreenn/Fashion';
import Gadget from './bukamallscreenn/Gadget';
import Ibu from './bukamallscreenn/Ibu';
import Isi from './bukamallscreenn/Isi';
import Kantor from './bukamallscreenn/Kantor';
import Kebutuhan from './bukamallscreenn/Kebutuhan';
import Kesehatan from './bukamallscreenn/Kesehatan';
import Olahraga from './bukamallscreenn/Olahraga';
import Otomotif from './bukamallscreenn/Otomotif';
import Perkakas from './bukamallscreenn/Perkakas';

export default class HeaderTitleExample extends Component {
  render() {
    return (
      <Container>
        <Header style = {styles.header}>
        <Left style={{flex:1}} />
        <Body style={{flex:8, paddingTop:10, paddingBottom:10}}>
        <Item style={{backgroundColor:'#eee', width:220, height:35}}>
              
              <Input style={{marginLeft:5, fontSize:12}} placeholder ="Cari di BukaMall" />
              <Icon style={{margin:10}} size ={20} name="find-replace"/>
              </Item>
              </Body>
              <Right style={{flex:3, backgroundColor:'#fff'}} >
                
                <Button style ={{backgroundColor:'#fff'}}>
                  <Icon name ="message-processing" color='#D8114B' size = {20} />
                </Button>
                <Button style ={{backgroundColor:'#fff'}}>
                  <Icon name ="notification-clear-all" color='#D8114B' size = {20} />
                </Button>
              </Right>
          </Header>
          <Content>
            <Tabs tabBarUnderlineStyle={{ backgroundColor: '#D8114B' }} renderTabBar={()=> <ScrollableTab />}>
          <Tab heading="Popular" activeTextStyle={{ color: '#D8114B' }} 
                  textStyle={{ color: '#ccc', fontSize: 15 }} 
                  tabStyle={{ backgroundColor: '#fff' }} 
                  activeTabStyle={{ backgroundColor: '#fff' }}>
            <Populer />
          </Tab>
          <Tab heading="Gadget & Komputer" activeTextStyle={{ color: '#D8114B' }} 
                  textStyle={{ color: '#ccc', fontSize: 15 }} 
                  tabStyle={{ backgroundColor: '#fff' }} 
                  activeTabStyle={{ backgroundColor: '#fff' }}>
            <Gadget />
          </Tab>
          <Tab heading="Fashion & Gaya Hidup" activeTextStyle={{ color: '#D8114B' }} 
                  textStyle={{ color: '#ccc', fontSize: 15 }} 
                  tabStyle={{ backgroundColor: '#fff' }} 
                  activeTabStyle={{ backgroundColor: '#fff' }}>
            <Fashion />
          </Tab>
          <Tab heading="Isi Rumah & Elektronik" activeTextStyle={{ color: '#D8114B' }} 
                  textStyle={{ color: '#ccc', fontSize: 15 }} 
                  tabStyle={{ backgroundColor: '#fff' }} 
                  activeTabStyle={{ backgroundColor: '#fff' }}>
            <Isi />
          </Tab>
          <Tab heading="Olahraga & Hobi" activeTextStyle={{ color: '#D8114B' }} 
                  textStyle={{ color: '#ccc', fontSize: 15 }} 
                  tabStyle={{ backgroundColor: '#fff' }} 
                  activeTabStyle={{ backgroundColor: '#fff' }}>
            <Olahraga />
          </Tab>
          <Tab heading="Otomotif & Aksesoris" activeTextStyle={{ color: '#D8114B' }} 
                  textStyle={{ color: '#ccc', fontSize: 15 }} 
                  tabStyle={{ backgroundColor: '#fff' }} 
                  activeTabStyle={{ backgroundColor: '#fff' }}>
            <Otomotif />
          </Tab>
          <Tab heading="Kebutuhan Harian" activeTextStyle={{ color: '#D8114B' }} 
                  textStyle={{ color: '#ccc', fontSize: 15 }} 
                  tabStyle={{ backgroundColor: '#fff' }} 
                  activeTabStyle={{ backgroundColor: '#fff' }}>
            <Kebutuhan />
          </Tab>
          <Tab heading="Perkakas & Alat Berat" activeTextStyle={{ color: '#D8114B' }} 
                  textStyle={{ color: '#ccc', fontSize: 15 }} 
                  tabStyle={{ backgroundColor: '#fff' }} 
                  activeTabStyle={{ backgroundColor: '#fff' }}>
            <Perkakas />
          </Tab>
          <Tab heading="Alat Tulis & Kantor" activeTextStyle={{ color: '#D8114B' }} 
                  textStyle={{ color: '#ccc', fontSize: 15 }} 
                  tabStyle={{ backgroundColor: '#fff' }} 
                  activeTabStyle={{ backgroundColor: '#fff' }}>
            <Kantor />
          </Tab>
          <Tab heading="Ibu & Anak" activeTextStyle={{ color: '#D8114B' }} 
                  textStyle={{ color: '#ccc', fontSize: 15 }} 
                  tabStyle={{ backgroundColor: '#fff' }} 
                  activeTabStyle={{ backgroundColor: '#fff' }}>
            <Ibu />
          </Tab>
          <Tab heading="Kesehatan & Kecantikan" activeTextStyle={{ color: '#D8114B' }} 
                  textStyle={{ color: '#ccc', fontSize: 15 }} 
                  tabStyle={{ backgroundColor: '#fff' }} 
                  activeTabStyle={{ backgroundColor: '#fff' }}>
            <Kesehatan />
          </Tab>
        </Tabs>
          </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
    header:{
    backgroundColor:'#fff',
    borderBottomWidth:1,
    borderBottomColor:'#eee',
  },
    subheader :{
      backgroundColor :'#fff',
    },
 
});