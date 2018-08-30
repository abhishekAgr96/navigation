import React, {Component} from 'react';
import {StyleSheet, Text, View,Image,ScrollView,FlatList,AsyncStorage} from 'react-native';
  import {MyCard} from './myCard';

export class UserList extends Component {
  constructor(props){
    super(props);
    this.Array_Items=require('./content.json');
    this.state={
        token:'',
        myJson:[]
    }
  }
  static navigationOptions = {
    title: 'Dashboard',
    
  };

  componentWillMount(){
   this.getToken();
 
  }
  getToken= async()=>{
    try{
       const token=await AsyncStorage.getItem('token');
       if(token!==null){
        this.getUserList(token);
       }
        
    }
    catch(error){
        alert('err'+ err)
    }

}

baseurl="http://192.168.12.39:7000/api/" 
getUserList= async (token)=>{
    try { 
        let response = await fetch( this.baseurl+"v1/user/getUserList/0/1/10",{
             method: 'GET', 
             headers: { 
                'x-access-token':token
             },   
            } );
             let responseJson = await response.json();
          //    alert("my response"+JSON.stringify(responseJson.success))
          this.setState({myJson:responseJson.message.results})   
            alert('response'+JSON.stringify(responseJson));
              return responseJson;
             } catch (error) {
                  console.log(error);}

}
  render() {
   
    return (
      <View style={styles.container}>
        <View style={{backgroundColor:'#FF6D3E',flexDirection:'row'}}>
          <Text style={{fontSize:40,marginLeft:4}}>=</Text>
          <Text style={styles.title}>Trending</Text>
          <Image source={{uri:'https://www.pngarts.com/files/1/Globe-PNG-Photo.png'}} style={{height:40,width:40,marginLeft:100,marginTop:5}}></Image>
        </View>
        <View>
            
           {/* <Text>{this.state.token}</Text> */}
            {/* <Text>{this.state.myJson}</Text> */}
               <FlatList
                data={this.state.myJson}
                renderItem={({item})=>{
                     myString=JSON.stringify(item);
                    return(
                    <View style={styles.user}>
                        <Text>Name:{item.name.title} {item.name.first} {item.name.last}</Text>
                        <Text>Email:{item.email}</Text>
                        <Text>Gender: {item.gender}</Text>
                        <Text>Location:{item.location.city}</Text>  
                        <Text>Age:{item.dob.age}</Text>
                    </View>
                )}}
              />
            
          </View>
          </View>  
    );
  }
}
const styles = StyleSheet.create({
   user:{
       borderBottomWidth: 1,
   }
  })
  