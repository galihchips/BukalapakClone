import React, {Component} from 'react';

import { Col, Row, Grid } from "react-native-easy-grid";
import {Platform, StyleSheet, Text, View, Image, Dimensions, ScrollView} from 'react-native';
import { Container, Content ,Header, Left, Body, Right, Title, Subtitle, Input,Card, CardItem , List,ListItem,Footer} from 'native-base';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';

const Slider = props => (

		<Image style = {styles.image} source ={props.uri} />
)
export default class HeaderHomeScreen extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	imageSlider : [
	  		require('../iklan/iphone.jpg'),
	  		require('../iklan/koper.jpg'),
	  		require('../iklan/sandal.jpg'),
	  		require('../iklan/sepatu.jpg')
	  	]
	  };
	}
	render(){
		return(
				<View>
					<Container>
					<Content>
						<Card>
							<CardItem cardBody>
								<Swiper
								autoplay
								height={150}
								>
								{
									this.state.imageSlider.map((item, i)=><Slider
										uri={item}
										key={i}
										/>)
								}	
								</Swiper>
							</CardItem>
						</Card>
					</Content>
						<Content style={{marginTop:-300}}>
						 <View>
							<Container style={{flex:1}}>
								<Header style={{backgroundColor:'white'}}>
									<Left style={{flex:0.2}} />
									<Body style={{flex:2}}>
										<Title style={{fontSize:12, color:'black'}}>
											E Voucher, tiket, & investasi
										</Title>
									</Body>
									<Right style={{flex:1}} />
								</Header>
							</Container>
							</View>
							</Content>
							</Container>
							<View style={{marginTop:-400}}>
								<ScrollView contentContainerStyle={{flex:1}}>
									<View style={{flex:1}}>
										<Content>
									
										<Grid style={{alignItems:'center'}}>
												<Col size={25} style={{alignItems:'center', alignSelf:'center'}}>
													<View style={{marginTop:10, alignSelf:'center'}}>
														<View style={{ alignSelf:'center'}}>
															<Icon name = 'houzz' size = {20} style = {{alignSelf:'center'}} />
															<Text style = {{textAlign:'center', fontSize:10, marginTop:10}}>Badai Uang</Text>
														</View>
														<View style={{marginTop:20, alignSelf:'center'}}>
															<Icon name = 'vimeo' size = {20} style = {{alignSelf:'center'}} />
															<Text style = {{textAlign:'center', fontSize:10, marginTop:10}}>Pulsa Prabayar</Text>
														</View>
														<View style={{marginTop:10, alignSelf:'center'}}>
															<Icon name = 'train' size = {20} style = {{alignSelf:'center'}} />
															<Text style = {{textAlign:'center', fontSize:10, marginTop:10, marginBottom:-10}}>Tiket Kereta</Text>
														</View>
														
													</View>
												</Col>
												<Col size={25} style={{alignItems:'center', alignSelf:'center'}}>
													<View style={{marginTop:10, alignSelf:'center'}}>
														<View style={{ alignSelf:'center'}}>
															<Icon name = 'meetup' size = {20} style = {{alignSelf:'center'}} />
															<Text style = {{textAlign:'center', fontSize:10, marginTop:10}}>Spin & Win</Text>
														</View>
														<View style={{marginTop:20, alignSelf:'center'}}>
															<Icon name = 'snowflake-o' size = {20} style = {{alignSelf:'center'}} />
															<Text style = {{textAlign:'center', fontSize:10, marginTop:10}}>Listrik Prabayar</Text>
														</View>
														<View style={{marginTop:10, alignSelf:'center'}}>
															<Icon name = 'plane' size = {20} style = {{alignSelf:'center'}} />
															<Text style = {{textAlign:'center', fontSize:10, marginTop:10, marginBottom:-10}}>Tiket Pesawat</Text>
														</View>
														
													</View>
												</Col>
												<Col size={25} style={{alignItems:'center', alignSelf:'center'}}>
													<View style={{marginTop:10, alignSelf:'center'}}>
														<View style={{marginTop:10, alignSelf:'center'}}>
															<Icon name = 'bank' size = {20} style = {{alignSelf:'center'}} />
															<Text style = {{textAlign:'center', fontSize:10, marginTop:10}}>Buka DANA</Text>
														</View>
														<View style={{marginTop:10, alignSelf:'center', width: '70%'}}>
															<Icon name = 'bath' size = {20} style = {{alignSelf:'center'}} />
															<Text style = {{textAlign:'center', fontSize:10, marginTop:10}}>Listrik Pascabayar</Text>
														</View>
														<View style={{marginTop:10, alignSelf:'center'}}>
															<Icon name = 'dollar' size = {20} style = {{alignSelf:'center'}} />
															<Text style = {{textAlign:'center', fontSize:10, marginTop:10}}>BukaEmas</Text>
														</View>
														
													</View>
												</Col>
												<Col size={25} style={{alignItems:'center', alignSelf:'center'}}>
													<View style={{marginTop:10, alignSelf:'center'}}>
														<View style={{marginTop:10, alignSelf:'center', width: '70%'}}>
															<Icon name = 'vcard' size = {20} style = {{alignSelf:'center'}} />
															<Text style = {{textAlign:'center', fontSize:10, marginTop:10}}>Bukalapak Credits</Text>
														</View>
														<View style={{marginTop:10, alignSelf:'center'}}>
															<Icon name = 'car' size = {20} style = {{alignSelf:'center'}} />
															<Text style = {{textAlign:'center', fontSize:10, marginTop:10}}>BukaMobil</Text>
														</View>
														<View style={{marginTop:10, alignSelf:'center'}}>
															<Icon name = 'behance' size = {20} style = {{alignSelf:'center'}} />
															<Text style = {{textAlign:'center', fontSize:10, marginTop:10}}>Lihat Semua</Text>
														</View>
														
													</View>
												</Col>
										</Grid>
										</Content>
										<Content>
										<Card style={{width:'90%', alignSelf:'center'}}>
											
											<CardItem style={{flex:1}} bordered>
												
													<Left style={{flex:0.5}}>
													<Icon name = 'address-book-o' size={30} style={{color:'pink'}} /> 
													</Left>
													<Body style={{flex:3}}>
														<Text> Ajak Teman dan dapatkan Credits hinggan Rp100.000s</Text>
													</Body>
												

											</CardItem>
											<CardItem bordered>
												<Body>
													<Text style={{color:'pink'}}>Lihat Selengkapnya</Text>
												</Body>
												<Right>
									                <Icon name="chevron-right" />
									            </Right>
											</CardItem>
										</Card>
										</Content>
										<Content>
											<Card>
												
											</Card>

										</Content>
									</View>
								</ScrollView>
							</View>			
				</View>
						
			)
	}
}

const {width} = Dimensions.get('window')
const {height} = Dimensions.get('window')
const styles = {
	container: {
		flex:1
	},
	image: {
		flex:1,
		width,
		height,
	}
}
