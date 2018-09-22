
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Container, Content ,Header, Left, Body, Right, Title, Subtitle, Input,Tab, Tabs, Item, Button} from 'native-base';
import {createTabNavigator} from 'react-navigation';

import HeaderFavorit from './screens/HeaderFavorit';
import HeaderHomeScreen from './screens/HeaderHomeScreen';
import HeaderKategori from './screens/HeaderKategori';
import HeaderLangganan from './screens/HeaderLangganan';


export default class HomeScreen extends Component{

	render(){
		return( 
			<Container>
				<Header searchBar style={styles.header}>
				<Left style={{flex:1}} />
				<Body style={{flex:8, paddingTop:10, paddingBottom:10}}>
				<Item style={{backgroundColor:'#fff', width:220, height:35}}>
	            <Icon style={{margin:10}} size={20} name="find-replace" />
	            <Input style={{fontSize:13}}placeholder ="Bukalapak" />
	            <Icon style={{margin:10}} name="menu" size = {20}/>
	          	</Item>
	          	</Body>
	          	<Right style={{flex:3, backgroundColor:'#D8114B'}} >
	          		
	          		<Button style ={{backgroundColor:'#D8114B'}}>
	          			<Icon name ="message-processing" color='#fff' size = {20} />
	          		</Button>
	          		<Button style ={{backgroundColor:'#D8114B'}}>
	          			<Icon name ="notification-clear-all" color='#fff' size = {20} />
	          		</Button>
	          	</Right>
        	</Header>
				<Content style={styles.subheader}>
				        <Tabs tabBarUnderlineStyle={{ backgroundColor: '#D8114B' }}>
				          <Tab heading="Home" activeTextStyle={{ color: '#000' }} 
				          textStyle={{ color: '#9a9fa8', fontSize: 15 }} 
				          tabStyle={{ backgroundColor: '#fff' }} 
				          activeTabStyle={{ backgroundColor: '#fff' }}>
				             <HeaderHomeScreen />
				          </Tab>
				          <Tab heading="Kategori" activeTextStyle={{ color: '#000' }} 
				          textStyle={{ color: '#9a9fa8', fontSize: 15 }} 
				          tabStyle={{ backgroundColor: '#fff' }} 
				          activeTabStyle={{ backgroundColor: '#fff' }}>
				           <HeaderKategori />
				          </Tab>
				          <Tab heading="Favorit" activeTextStyle={{ color: '#000'}} 
				          textStyle={{ color: '#9a9fa8', fontSize: 15 }} 
				          tabStyle={{ backgroundColor: '#fff' }} 
				          activeTabStyle={{ backgroundColor: '#fff' }}>
				            <HeaderFavorit />
				          </Tab>
				          <Tab heading="Langganan" activeTextStyle={{ color: '#000' }} 
				          textStyle={{ color: '#9a9fa8', fontSize: 15 }} 
				          tabStyle={{ backgroundColor: '#fff' }} 
				          activeTabStyle={{ backgroundColor: '#fff' }}>
				           <HeaderLangganan navigation={this.props.navigation} />
				          </Tab>
				        </Tabs>			    
		        </Content>
		      </Container>
			)
	}

}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
    header:{
    backgroundColor:'#D8114B',
  },
  	subheader :{
  		backgroundColor :'#fff',
  	},
 
});


const HeaderTabNavigator = createTabNavigator ({

	Home : {
		screen : HeaderHomeScreen
	},
	Kategori : {
		screen : HeaderKategori
	},
	Favorit : {
		screen : HeaderFavorit
	},
	Langganan : {
		screen : HeaderLangganan
	}

},{

	InitialRouteName :'HeaderHomeScreen',
	tabBarPosition : 'top'

})