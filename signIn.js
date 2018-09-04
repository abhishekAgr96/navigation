import React,{Component} from 'react';
import {Text,View,StyleSheet,Image,Button,AsyncStorage} from 'react-native'
import {InputType,MyButton} from './myComponents'

export class SignIn extends Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
            message:'',
        }
    }
    static navigationOptions = {
        title: 'Sign In',
      };
    render(){
        return (
            <View style={styles.container}>
                <Image style={styles.logo} source={require('./logo.png')}></Image>
                <Text style={{color:'red'}}>{this.state.message}</Text>
                <InputType placeholder="E-mail" setField={(email)=>{this.setState({email:email})}}/>
                <InputType placeholder="Password" setField={(password)=>{this.setState({password:password})}}/>
                <MyButton buttonText="Sign In" myFunction={()=>{this.signInApi()}}
></MyButton> 
                <Text style={{marginTop:10}}>Forget your details?</Text>
                <Button onPress={()=>{this.props.navigation.navigate('SignUp')}} title='Create a new account'></Button>
                {/* <Text>email:{this.props.navigation.state.params.email}</Text>
                <Text>Password:{this.props.navigation.state.params.password}</Text> */}
                
            </View>
          );
    }
    baseurl="http://192.168.12.39:7000/api/" 
    signInApi=async()=>{
        //  if(this.state.email==this.props.navigation.state.params.email &&
        //      this.state.password==this.props.navigation.state.params.password)
        // this.props.navigation.navigate('MidScreen');
        //  else
        //  alert('wrong id password');

        try{
            let response = await fetch(this.baseurl+'v1/user/authenticateUser',{
                method:'POST',
                headers:{
                    Accept: 'application/json', 
                    'Content-Type': 'application/json',
                 },
                 body: JSON.stringify({
                    email:this.state.email,
                    password:this.state.password
                  }),
                });
                 let responseJson = await response.json();
             //     alert("my response"+responseJson.data.email)
                  if(responseJson.success){
                      this.storeToken(responseJson.token);
                       this.storeEmail(responseJson.data.email)
                      this.props.navigation.navigate('MidScreen');
                  }
                  else{
                      this.setState({message:responseJson.message})
                  }
                  return responseJson;
                }
        catch(err){
            alert("sign in err"+err);
        }
    }

    storeToken= async(token)=>{
        try{
            await AsyncStorage.setItem('token',token);
      //      alert('token stored in async storage'+token);
        }
        catch(error){
            alert('err'+ err)
        }

    }
    storeEmail= async(email)=>{
        try{
            await AsyncStorage.setItem('email',email);
            alert('token stored in async storage'+token);
        }
        catch(error){
            alert('err'+ err)
        }

    }
}


const styles=StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      },
      logo:{
          height:100,
          width:100,
          marginBottom: 20,
      }
})
