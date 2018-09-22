import React, { Component } from 'react';
import {View,Text} from 'react-native';
import { Container, Header, Content, Form, Item ,Title, Input, Button } from 'native-base';
export default class Login extends Component {
  render() {

    return (
       <View>
         <Container style={{flex:1}}>
            <Header style={{backgroundColor :'transparent'}}>
              
            </Header>
            <View style={{flex:1}}>
              <View style={{flex:0.2,marginTop:10}}>
                <Text style={{fontSize:20}}>
                  Login
                </Text>
              </View>
              <View style={{flex:1.5,width:'89%',alignSelf:'center'}}>
                 <Text>E-MAIL / USERNAME / NOMOR HANDPHONE</Text>
                 <Item>
                    <Input placeholder="" />
                  </Item>
                  <Text>PASSWORD</Text>
                 <Item>
                    <Input placeholder="" />
                  </Item>
                  <View style={{paddingTop:50}}>
                     <Button style={{justifyContent:'center',alignSelf:'center',width:'80%', backgroundColor:'#D8114B'}}>
                      <Text style={{ fontSize:15, color:'white'}}>Loginr</Text>
                   </Button>
                </View>
              </View>
            </View>
          </Container>
       </View>
    );
  }
}