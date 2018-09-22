import React, {Component} from 'react';


import {Platform, StyleSheet, Text, View, Dimensions, Image, ScrollView} from 'react-native';
import { Container, Content ,Header, Left, Body, Right, Title, Subtitle, Input ,Button} from 'native-base';
import {StackNavigator} from 'react-navigation';

import Login from '../Login';

export default class HeaderFavorit extends Component {

	render(){
		const {navigation} =this.props;
		return(		
					<View style={{flex:1}}>
					<Container style={{height:'100%'}}>
					<View style={{flex:1}}>
					<ScrollView contentContainerStyle={{flex:1}}>
						<Image
			        	  style={styles.image}
				          source={require('../image/favorit.png')}
				        />
				        <View style={{width:'80%',alignSelf:'center'}}>
				        	<Text style={{textAlign:'center', color:'#aaa', fontSize:13}}>
				        		Segera login di Bukalapak agar kamu bisa menandai berbagai macam barang favoritmu
				        	</Text>
				        </View>
				        <View style={{paddingTop:10}}>
				        <Button style={{justifyContent:'center',alignSelf:'center',width:'80%', backgroundColor:'#D8114B'}}>
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
const Screen = StackNavigator({

	Login: {
		screen : Login
	},

})
const {width} = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
    header:{
    backgroundColor:'#D8114B',
  },
  image:{
  	alignSelf:'center',
  	width:280,
  	height:280
  },
});