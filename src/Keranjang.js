
import React, { Component } from 'react';
import {Dimensions, StyleSheet, Image, View, Text} from 'react-native';
import { Container, Header, Left, Body, Right, Title, Content,Card,CardItem } from 'native-base';
export default class Keranjang extends Component {
  render() {
    return (
     <View style={{flex:1,backgroundColor:'#fff'}}>
     <View style={{flex:1}}>
       <Header style={{backgroundColor:'#D8114B'}}>
        <Left style={{flex:1}} />
        <Body style={{flex:2}}>
           <Title style={{fontSize:16,textAlign:'center', alignSelf:'center'}}> Keranjang Belanja </Title>
        </Body>
        <Right style={{flex:1}} />
       </Header>
     </View>
     <View style={{flex:2}}>
       <Content>
         <View style={{alignSelf:'center'}}>
           <Image
                  style={styles.image}
                  source={require('./image/keranjang.png')}
                />
         </View>
         <View>
           <Text style={{fontSize:18,textAlign:'center'}}>
             Belum ada barang belanjaan
           </Text>
           <Text style={{fontSize:14,color:'#aaa',textAlign:'center', width:'80%',alignSelf:'center'}}>
             Semua barang belanjaan kamu akan terdaftar di sini. Ayo mulai belanja dan rasakan kemudahannya.
           </Text>
         </View>
       </Content>
     </View>
     <View style={{flex:1}}>

     </View>
     </View>
    );
  }
}

const {width} = Dimensions.get('window')
const {height} = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
    header:{
    backgroundColor:'#D8114B',
  },
  image:{
  	marginBottom:30,
  	width:150,
    height:150
  },
});