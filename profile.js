import React,{Component} from 'react';
import {Text,View,StyleSheet,Image,AsyncStorage} from 'react-native'
import {InputType,MyButton} from './myComponents'
import { Button } from 'react-native-elements';
import ImagePicker from 'react-native-image-picker'

// var ImagePicker = require('react-native-image-picker');


export class Profile extends Component{
    constructor(props){
        super(props);
        this.state={
          avatarSource:require('./user.png')
        }
    }
    static navigationOptions = {
        title: 'Profile',
        // avatarSource:require('./user.png'),
      };
      pickImage=()=>{
        var options = {
            title: 'Select Avatar',
            storageOptions: {
              skipBackup: true,
              path: 'images'
            }
          };
          ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
            alert(JSON.stringify(response));
            if (response.didCancel) {
              console.log('User cancelled image picker');
            }
            else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            }
            
            else {
              let mysource = { uri: response.uri };
              alert(response.uri);
              // You can also display the image using data:
            //    let source = 'data:image/jpeg;base64,'+ response.data ;
                // this.uploadUserImage(source);
         //     alert(JSON.stringify(response));
              this.setState({
                avatarSource: mysource
              });
            }
          });
          

    }
    getToken = async()=>{
      try{
        const token=await AsyncStorage.getItem('token');
        if(token!==null){
    //      alert(token);
         return token;
        }    
     }
     catch(error){
      return err;   
     }  
    }
    getEmail = async()=>{
      try{
        const email=await AsyncStorage.getItem('email');
        if(email!==null){
    //      alert(token);
         return email;
        }    
     }
     catch(error){
      return err;   
     }  
    }
    baseurl="http://192.168.12.39:7000/api/" 
    uploadUserImage=async (mySource)=>{
       var  mytoken=await this.getToken();
       let email=await this.getEmail();
     //  alert(mytoken)
       try { 
        let response = await fetch( this.baseurl+"v1/user/uploadUserImage",{
             method: 'POST', 
             headers: { 
             //   Accept: 'application/json', 
                'Content-Type': 'application/json',
                'x-access-token':mytoken
             },
             body: JSON.stringify({
                email:email,
                image:this.state.avatarSource

              }),
            } );
             let responseJson = await response.json();
              alert("my response"+JSON.stringify(responseJson))
              // if(responseJson.success){
              //     this.props.navigation.goBack();
              // }
              // else{
              //     this.setState({message:'User already exist'})
              // }
              // return responseJson;
             } catch (error) {
                  alert("error in image upload"+error);}


}
      //  alert("my email"+email);


      
    render(){
        return (
            <View style={styles.container}>
                <Image style={styles.dp} source={this.state.avatarSource}></Image>
                <Button title='update image' onPress={this.pickImage}></Button>
                {/* <Text>{this.state.avatarSource}</Text> */}
                <InputType placeholder="name"/>
                <InputType placeholder="abhishek.agrawal@kelltontech.com"/>
                <InputType placeholder="387459683"/>
                <MyButton buttonText="Save" myFunction={()=>{alert('Saved')}}></MyButton> 
                
            </View>
          );
    }
    
}
const styles=StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      },
      dp:{
          height:100,
          width:100,
          marginBottom: 20,
      }
})
