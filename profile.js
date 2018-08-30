import React,{Component} from 'react';
import {Text,View,StyleSheet,Image} from 'react-native'
import {InputType,MyButton} from './myComponents'

export class Profile extends Component{
    constructor(props){
        super(props);
    }
    static navigationOptions = {
        title: 'Profile',
      };
    render(){
        return (
            <View style={styles.container}>
                <Image style={styles.dp} source={require('./user.png')}></Image>
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
