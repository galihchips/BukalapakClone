

import React, { Component } from 'react';
import {Dimensions, StyleSheet, Image, View} from 'react-native';
import { Container, Header, Left, Body, Right, Title, Content,Card,CardItem ,Text,Form, Item, Input ,Button} from 'native-base';
export default class Transaksi extends Component {
  render() {
    return (
    	<View style={{flex:1}}>
      		<Container style={{flex:1}}>
		        <Header style={styles.header}>
		          <Left style={{flex:1}}/>
		          <Body style={{flex:2}}>
		            <Title style={{fontSize:16,alignSelf:'center'}}>Cek Status Transaksi</Title>
		          </Body>
		          <Right style={{flex:1}} />
		        </Header>
        		<View style={{flex:1}}>
        			<View style={{flex:0.2,marginTop:10}}>
        				<Text style={{textAlign:'center',fontSize:11,color:'#aaa'}}>
        					Khusus untuk 'Beli tanpa Login'
        				</Text>
        			</View>
        			<View style={{flex:1.5,width:'89%',alignSelf:'center'}}>
        				 <Item>
				            <Input placeholder="Kode Pembeli" />
				          </Item>
        				 <Item>
				            <Input placeholder="Nomor Transaksi/Tagihan" />
				          </Item>
                  <View style={{paddingTop:50}}>
                     <Button style={{justifyContent:'center',alignSelf:'center',width:'80%', backgroundColor:'#D8114B'}}>
                      <Text style={{ fontSize:15, color:'white'}}>CEK STATUS</Text>
                   </Button>
                </View>
        			</View>
        		</View>
      		</Container>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
    header:{
    backgroundColor:'#D8114B',
  },
});