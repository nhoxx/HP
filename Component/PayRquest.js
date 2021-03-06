import React, { Component } from 'react';
import {Text,StyleSheet,View,Image,TouchableOpacity} from 'react-native'
import { Container, Header, Left, Body, Footer, Button, Icon, Right,FooterTab, Content,Item,Input,SearchBar,Tabs, Tab, CheckBox} from 'native-base';
import { TextInput } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Ic from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/FontAwesome5';

export default class PayRquest extends Component {
  constructor(){
    super();
    this.state={
      check:true,
      checkic:true
    }
  }
  onePressed(){
    this.setState({check:!this.state.check, check1:false,check2 :false,});
  }
  twoPressed(){
    this.setState({check:false, check1:!this.state.check1,check2 :false,});
  }
  threePressed(){
    this.setState({check:false, check1:false,check2:!this.state.check2});
  }
  iconPressed(){
   
      alert('asdsa')
  
  }
  render() {
    return (
      <Container >
        <Header style={{ backgroundColor: "white" }}>
                <Left>
            <View style={{ justifyContent: "center"}}>
                <Button transparent style={{justifyContent: "center" }} onPress={()=>{this.props.navigation.goBack()}}><Icons size={20}  name="chevron-left"></Icons></Button>
            </View>
            </Left>
           <Body  style={{justifyContent: "center" ,alignItems:"center",flex:4}}>
               <Text style={{ fontSize: 20,  fontWeight: "bold" }}>Pay Request</Text>
           </Body>
           <Right style={{justifyContent: "center" ,alignItems:"center",flexDirection:'row'}}>
           <Text><Ic name="bell" size={20}></Ic></Text>

           <TouchableOpacity style={{paddingLeft:'25%'}} onPress={()=>{this.props.navigation.openDrawer()}}>
           <Ionicons name="md-menu" size={25}></Ionicons>
                   </TouchableOpacity>
           </Right>
      </Header>
        <Content style={{backgroundColor:'white'}}> 
        <View style={{flex: 1,height:210,marginTop:'3%',marginLeft:'4%',marginRight:'4%',borderColor:'#EEEEEE',borderWidth:1,borderRadius:6}}>
            <View style={{flex: 1,justifyContent:'center'}} >
                <Text style={{color:'black',marginLeft:'3%'}}>You have received a request from:</Text>
            </View>
            <View style={{flex: 3,}} >
                <View style={{height:55,borderWidth:1,borderRadius:5,borderColor:'#EEEEEE',marginTop:'2%',marginLeft:'2%',marginRight:'2%',flexDirection:'row'}}>
                    <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                        <Image style={{height:40,width:40}} source={require('../Appointments/images/women.png')} />
                    </View>
                    <View style={{justifyContent:'center',alignItems:'flex-start',flex:3}}>
                        <Text style={{color:'black'}}>William</Text>
                        <Text>1234 4567 6789 978</Text>
                    </View>
                </View>
                <View style={{height:55,borderWidth:1,borderRadius:5,borderColor:'#EEEEEE',marginTop:'2%',marginLeft:'2%',marginRight:'2%',flexDirection:'row'}}>
                   
                    <View style={{justifyContent:'center',alignItems:'flex-start',flex:1,flexDirection:'column',backgroundColor:'#fafafa'}}>
                       <View style={{flexDirection:'row'}}>
                       <Text style={{color:'black',flex:1,fontWeight:'400',fontStyle:"italic",marginLeft:6}}>Message:</Text>
                       <Text style={{fontSize:13,flex:4,fontStyle:"italic"}}>Lorem Ipsum is simply dummy text of the </Text>
                       </View>
                        
                        <Text style={{fontSize:13,fontStyle:"italic",marginLeft:6}}>printing and typesetting industry</Text>
                    </View>
                </View>
            </View>
            
            <View style={{flex: 1,flexDirection:'row',alignItems:'center',marginTop:'2%'}} >
            <Text style={{color:'black',flex:1,marginLeft:'3%'}}>Amount to pay:</Text>
            <Text style={{color:'#0764b0',flex:1,textAlign:'right',marginRight:'7%',fontWeight:'500'}}>$ 100</Text>
            </View>
      </View>
        <View style={{flex:1,flexDirection:'column'}}> 
         <View style={{marginLeft:'4%',marginRight:'4%',borderRadius:4,borderWidth:0.5,borderColor:'#EEEEEE',paddingTop:'5%',padding:'3%'}}>
            <Text style={{fontSize:18,color:'black',marginBottom:'3%'}}>
            Select the way to pay
            </Text>
            <View style={{height:47,flexDirection:'row',alignItems:'center',flex:1,justifyContent:'center',marginBottom:'6%'}}>
               <View style={{flex:1,marginLeft:'-4%'}}><CheckBox style={site.check} checked={this.state.check}
             onPress={() =>this.onePressed()}/></View>
                
                <View style={{flex:1,marginLeft:'-2%'}}><Image style={{height:50,width:50}} source={require('../Appointments/images/Group2.png')} /></View>
                <View style={{flex:2,marginRight:'-7%'}}>
                  <Text style={{color:'black'}}>Harmony Account</Text>
                  <Text style={{color:'black'}}>JERRY NGUYEN</Text>
                </View>
                <View style={{flex:1,marginRight:'-8%',marginTop:'-7%'}}><Text style={{fontSize:13,fontWeight:'bold',color:'#2ebe03'}}>$ 864.00</Text></View>
            </View>
            <View style={{height:47,flexDirection:'row',alignItems:'center',flex:1,justifyContent:'center',marginBottom:'6%',marginBottom:'6%'}}>
               <View style={{flex:1,marginLeft:'-4%'}}><CheckBox style={site.check} checked={this.state.check1}
             onPress={() =>this.twoPressed()}/></View>
                
                <View style={{flex:1,marginLeft:'-8%'}}><Image fontSize={30} source={require('../Appointments/images/thevisaa.png')} /></View>
                <View style={{flex:2,marginLeft:'-3%'}}>
                  <Text style={{color:'black'}}>**** **** **** **** 1234</Text>
                  <Text style={{color:'black'}}>JERRY NGUYEN</Text>
                </View>
            </View>
            <View style={{height:47,flexDirection:'row',alignItems:'center',flex:1,justifyContent:'center',marginBottom:'6%'}}>
               <View style={{flex:1,marginLeft:'-4%'}}><CheckBox style={site.check} checked={this.state.check2}
             onPress={() =>this.threePressed()}/></View>
                
                <View style={{flex:1,marginLeft:'-5%'}}><Image style={{height:50,width:50}} source={require('../Appointments/images/nganhang2.png')} /></View>
                <View style={{flex:2,marginLeft:'-5%'}}>
                  <Text style={{color:'black'}}>Bank America</Text>
                  <Text style={{color:'black'}}>**** **** **** **** 5565</Text>
                </View>
            </View>
             <View style={{paddingTop:'3%',height:47,flexDirection:'row',alignItems:'center',flex:1,justifyContent:'center',marginBottom:'6%'}}>
                <View style={{flex:1}}>
                <Icon style={site.ic} name="md-add-circle" check={this.state.checkic} onPress={()=> this.iconPressed()} /></View>
                <View style={{flex:4}}><Text style={{color:'black'}}>Add a bank account or card</Text></View>
             </View>
              </View> 
              <View style={{flex:1}}>

              <View style={site.view}>
                <Button  style={site.btn}><Text style={site.btn1}
                onPress={()=>{this.props.navigation.navigate('TransactionSend3')}}> Pay </Text></Button> 
              </View>
              </View>
          </View>
        </Content>
     
      </Container>
    );
  }
}
var site=StyleSheet.create({
    ic:{
      paddingTop:'8%',
        color:"#0764b0",
        marginLeft:'-2%',
        fontSize:38,
        flex:1
    },
    check:{
        borderRadius:30,
        height:32,
        width:32,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:0,
        borderColor:'#EEEEEE',
      
    },
    btn:{
      backgroundColor:'#0764b0',
    width:'40%',
    
    borderRadius: 4,
    justifyContent: 'center',
      alignItems:'center'
    },
    btn1:{
       fontWeight:'600',
      color:'white',
      fontSize:16,
      },
      view:{marginTop:'2%',
      flex:1, justifyContent: 'center',alignItems:'center',flexDirection:'row'
   }
});