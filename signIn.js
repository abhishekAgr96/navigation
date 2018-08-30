import React,{Component} from 'react';
import {Text,View,StyleSheet,Image,Button} from 'react-native'
import {InputType,MyButton} from './myComponents'

export class SignIn extends Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
    }
    static navigationOptions = {
        title: 'Sign In',
      };
    render(){
        return (
            <View style={styles.container}>
                <Image style={styles.logo} source={require('./logo.png')}></Image>
                <InputType placeholder="E-mail" setField={(email)=>{this.setState({email:email})}}/>
                <InputType placeholder="Password" setField={(password)=>{this.setState({password:password})}}/>
                <MyButton buttonText="Sign In" myFunction={()=>{this.myFunctionDefination()}}
></MyButton> 
                <Text style={{marginTop:10}}>Forget your details?</Text>
                <Button onPress={()=>{this.props.navigation.navigate('SignUp')}} title='Create a new account'></Button>
                <Text>email:{this.props.navigation.state.params.email}</Text>
                <Text>Password:{this.props.navigation.state.params.password}</Text>
                
            </View>
          );
    }
    myFunctionDefination()
    {
         if(this.state.email==this.props.navigation.state.params.email &&
             this.state.password==this.props.navigation.state.params.password)
        this.props.navigation.navigate('MidScreen');
         else
         alert('wrong id password');
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
