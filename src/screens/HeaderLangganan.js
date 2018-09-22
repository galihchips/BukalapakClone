import React, {Component} from 'react';


import {Platform, StyleSheet, Text, View, Dimensions, Image, ScrollView} from 'react-native';
import { Container, Content ,Header, Left, Body, Right, Title, Subtitle, Input ,Button} from 'native-base';


export default class HeaderFavorit extends Component {

	render(){
		return(
					<View style={{flex:1}}>
					<Container style={{height:'100%'}}>
					<View style={{flex:1}}>
					<ScrollView contentContainerStyle={{flex:1}}>
						<Image
			        	  style={styles.image}
				          source={require('../image/langganan.png')}
				        />
				        <View style={{width:'80%',alignSelf:'center'}}>
				        	<Text style={{textAlign:'center', color:'#000', fontSize:15}}>
				        		Halaman belum dapat diakses
				        	</Text>

				        	<Text style={{textAlign:'center', color:'#aaa', fontSize:13}}>
				        		Kamu harus melakukan login terlebih dahulu untuk melihat halaman ini
				        	</Text>
				        </View>
				        <View style={{paddingTop:10}}>
				        <Button style={{justifyContent:'center',alignSelf:'center',width:'80%', backgroundColor:'#D8114B'}}
				        onPress={() => this.props.navigation.navigate("Login")}>
				        	<Text style={{ fontSize:15, color:'white'}}>Login</Text>
				        </Button>
				        </View>
				        </ScrollView>
				        </View>
				        </Container>
					</View>
			)
	}

}
const {width} = Dimensions.get('window')
const {height} = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height
  },
    header:{
    backgroundColor:'#D8114B',
  },
  image:{
  	alignSelf:'center',
  	width:250,
  	height:250
  },
});