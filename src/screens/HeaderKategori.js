import React, {Component} from 'react';


import {Platform, StyleSheet, Text, View, ScrollView,Dimensions} from 'react-native';

import { Container, Content ,Header, Left, Body, Right, Title, Subtitle, Input,Tab, Tabs, Item, Button, Card, CardItem,List, ListItem} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default class HeaderKategori extends Component {



	render(){
		return(
			<View style={{flex:1}}>
				<Container style={{height:'100%'}}>
					<View>
						<ScrollView contentContainerStyle={{flex:1}}>
							<Header searchBar style={{backgroundColor:'white'}}>
								<Item style={{width:'90%', alignSelf:'center',backgroundColor:'#eee'}}>
						            
						            <Input style={{color:'#ddd', fontSize:12, marginLeft:30}} placeholder ="Cari Kategori" />
						            
						         </Item>
						    </Header>
						    <Content >
						    	<View style={{alignSelf:'flex-start', padding:20}}>
						    		<Text style={{fontSize:12,color:'black'}}>SEMUA KATEGORI</Text>
						    	</View>
						    	</Content>
							<Content>
						       
						        <Card>
						          <List>
						            <ListItem >
						            <Left style ={{flex:1}}>
						            	<Icon name = 'menu' size ={20} />
						            </Left>
						              <Body style={{flex:6}}>
						                <Text>Semua Kategori</Text>
						              </Body>
						              <Right />
						              
						            </ListItem>
						            <ListItem >
						            <Left style ={{flex:1}}>
						            	<Icon name = 'ticket-confirmation' size ={20} />
						            </Left>
						             <Body style={{flex:6}}>
						                <Text>E-Voucher & Tiket</Text>
						              </Body>
						              <Right>
						                <Icon name="chevron-right" />
						              </Right>
						            </ListItem>
						            <ListItem>
						            <Left style ={{flex:1}}>
						            	<Icon name = 'tag-multiple' size ={20} />
						            </Left>
						              <Body style={{flex:6}}>
						                <Text>Barang Diskon</Text>
						              </Body>
						              <Right/>
						            </ListItem>
						            <ListItem >
						            <Left style ={{flex:1}}>
						            	<Icon name = 'fridge-filled-bottom' size ={20} />
						            </Left>
						              <Body style={{flex:6}}>
						                <Text>Perawatan & Kecantikan</Text>
						              </Body>
						              <Right>
						                <Icon name="chevron-right" />
						              </Right>
						            </ListItem>
						            <ListItem >
						            <Left style ={{flex:1}}>
						            	<Icon name = 'medical-bag' size ={20} />
						            </Left>
						             <Body style={{flex:6}}>
						                <Text>Kesehatan</Text>
						              </Body>
						              <Right>
						                <Icon name="chevron-right" />
						              </Right>
						            </ListItem>
						            <ListItem>
						            <Left style ={{flex:1}}>
						            	<Icon name = 'tshirt-v' size ={20} />
						            </Left>
						              <Body style={{flex:6}}>
						                <Text>Fashion Wanita</Text>
						              </Body>
						              <Right>
						                <Icon name="chevron-right" />
						              </Right>
						            </ListItem>
						            <ListItem >
						            <Left style ={{flex:1}}>
						            	<Icon name = 'tshirt-crew' size ={20} />
						            </Left>
						              <Body style={{flex:6}}>
						                <Text>Fashion Pria</Text>
						              </Body>
						              <Right>
						                <Icon name="chevron-right" />
						              </Right>
						            </ListItem>
						            <ListItem >
						            <Left style ={{flex:1}}>
						            	<Icon name = 'cellphone-iphone' size ={20} />
						            </Left>
						             <Body style={{flex:6}}>
						                <Text>Handphone</Text>
						              </Body>
						              <Right>
						                <Icon name="chevron-right" />
						              </Right>
						            </ListItem>
						            <ListItem>
						            <Left style ={{flex:1}}>
						            	<Icon name = 'laptop-mac' size ={20} />
						            </Left>
						              <Body style={{flex:6}}>
						                <Text>Komputer</Text>
						              </Body>
						              <Right>
						                <Icon name="chevron-right" />
						              </Right>
						            </ListItem>
						            <ListItem >
						            <Left style ={{flex:1}}>
						            	<Icon name = 'disc-player' size ={20} />
						            </Left>
						              <Body style={{flex:6}}>
						                <Text>Elektronik</Text>
						              </Body>
						              <Right>
						                <Icon name="chevron-right" />
						              </Right>
						            </ListItem>
						            <ListItem >
						            <Left style ={{flex:1}}>
						            	<Icon name = 'camera' size ={20} />
						            </Left>
						             <Body style={{flex:6}}>
						                <Text>Kamera</Text>
						              </Body>
						              <Right>
						                <Icon name="chevron-right" />
						              </Right>
						            </ListItem>
						            <ListItem>
						            <Left style ={{flex:1}}>
						            	<Icon name = 'gamepad-variant' size ={20} />
						            </Left>
						              <Body style={{flex:6}}>
						                <Text>Hobi & Koleksi</Text>
						              </Body>
						              <Right>
						                <Icon name="chevron-right" />
						              </Right>
						            </ListItem>
						            <ListItem >
						            <Left style ={{flex:1}}>
						            	<Icon name = 'run' size ={20} />
						            </Left>
						              <Body style={{flex:6}}>
						                <Text>Olahraga</Text>
						              </Body>
						              <Right>
						                <Icon name="chevron-right" />
						              </Right>
						            </ListItem>
						            
						            <ListItem>
						            <Left style ={{flex:1}}>
						            	<Icon name = 'human-child' size ={20} />
						            </Left>
						              <Body style={{flex:6}}>
						                <Text>Fashion Anak</Text>
						              </Body>
						              <Right>
						                <Icon name="chevron-right" />
						              </Right>
						            </ListItem>
						            <ListItem>
						            <Left style ={{flex:1}}>
						            	<Icon name = 'baby-buggy' size ={20} />
						            </Left>
						              <Body style={{flex:6}}>
						                <Text>Perlengkapan Bayi</Text>
						              </Body>
						              <Right>
						                <Icon name="chevron-right" />
						              </Right>
						            </ListItem>
						            <ListItem>
						            <Left style ={{flex:1}}>
						            	<Icon name = 'sofa' size ={20} />
						            </Left>
						              <Body style={{flex:6}}>
						                <Text>Rumah Tangga</Text>
						              </Body>
						              <Right>
						                <Icon name="chevron-right" />
						              </Right>
						            </ListItem>
						            <ListItem>
						            <Left style ={{flex:1}}>
						            	<Icon name = 'food' size ={20} />
						            </Left>
						              <Body style={{flex:6}}>
						                <Text>Food</Text>
						              </Body>
						              <Right>
						                <Icon name="chevron-right" />
						              </Right>
						            </ListItem>
						            <ListItem>
						            <Left style ={{flex:1}}>
						            	<Icon name = 'car-hatchback' size ={20} />
						            </Left>
						              <Body style={{flex:6}}>
						                <Text>Mobil,Part dan Aksesoris</Text>
						              </Body>
						              <Right>
						                <Icon name="chevron-right" />
						              </Right>
						            </ListItem>
						            <ListItem>
						            <Left style ={{flex:1}}>
						            	<Icon name = 'motorbike' size ={20} />
						            </Left>
						              <Body style={{flex:6}}>
						                <Text>Motor</Text>
						              </Body>
						              <Right>
						                <Icon name="chevron-right" />
						              </Right>
						            </ListItem>
						            <ListItem>
						            <Left style ={{flex:1}}>
						            	<Icon name = 'office-building' size ={20} />
						            </Left>
						              <Body style={{flex:6}}>
						                <Text>Industrial</Text>
						              </Body>
						              <Right>
						                <Icon name="chevron-right" />
						              </Right>
						            </ListItem>
						            <ListItem>
						            <Left style ={{flex:1}}>
						            	<Icon name = 'book-open-page-variant' size ={20} />
						            </Left>
						              <Body style={{flex:6}}>
						                <Text>Perlengkapan Kantor</Text>
						              </Body>
						              <Right>
						                <Icon name="chevron-right" />
						              </Right>
						            </ListItem>
						            <ListItem>
						            <Left style ={{flex:1}}>
						            	<Icon name = 'ticket' size ={20} />
						            </Left>
						              <Body style={{flex:6}}>
						                <Text>Tiket & Voucher</Text>
						              </Body>
						              <Right>
						                <Icon name="chevron-right" />
						              </Right>
						            </ListItem>
						          </List>
						           </Card>

						        </Content>
				
				</ScrollView>
				</View>
				</Container>
				</View>
			)
	}

}
