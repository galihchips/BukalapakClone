import React, { Component } from 'react';
import {View,Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Container, Header, Content, Form, Item ,Title, Input, Button,Label } from 'native-base';
export default class Login extends Component {
  render() {

    return (
       <View style={{flex:1}}>
         <Container style={{flex:1}}>
            <Header style={{backgroundColor :'transparent'}}>
              
            </Header>
            <View style={{flex:1}}>
              <View style={{flex:0.2,marginTop:10,width:'80%',alignSelf:'center'}}>
                <Text style={{fontSize:20}}>
                  Login
                </Text>
              </View>
	            <Form style={{width:'90%',alignSelf:'center'}}>
		            <Item stackedLabel>
		              <Label style={{fontSize:10}}>EMAIL / USERNAME / NOMOR HANDPHONE</Label>
		              <Input />
		            </Item>
		            <Item stackedLabel last>
		              <Label style={{fontSize:10}}>PASSWORD</Label>
		              <Input />
		            </Item>
	          </Form>
	          <View style={{paddingTop:50}}>
                     <Button style={{justifyContent:'center',alignSelf:'center',width:'80%', backgroundColor:'#D8114B'}}>
                      <Text style={{ fontSize:15, color:'white'}}>Login</Text>
                   </Button>
                </View>
                <View style={{alignSelf:'center'}}>
                	<Text style={{fontSize:10}}>atau login dengan</Text>
                </View>
                <View style={{flexDirection:'row',alignSelf:'center',paddingTop:50}}>
                	<Button style={{justifyContent:'center',alignSelf:'center',width:'40%', backgroundColor:'#eee'}}>
                      <Icon name ='facebook-box' size = {20} />
                      <Text style={{ fontSize:15, color:'white',marginLeft:10}}>Facebook</Text>
                   </Button>
                   <Button style={{justifyContent:'center',alignSelf:'center',width:'40%', backgroundColor:'#eee',marginLeft:10}}>
                      <Icon name ='google-glass' size = {20} style={{marginLeft:-10}} />
                      <Text style={{ fontSize:15, color:'white',marginLeft:10}}>Google</Text>
                   </Button>
                </View>
            </View>
          </Container>
       </View>
    );
  }
}