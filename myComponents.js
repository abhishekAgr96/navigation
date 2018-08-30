import React,{Component} from 'react';
import {Text,View,TextInput,StyleSheet,TouchableOpacity,Image} from 'react-native'

export class InputType extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={styles.input}> 
                <TextInput  style={{fontSize:20}} placeholder={this.props.placeholder} 
                onChangeText={(text)=>{this.props.setField(text)}}></TextInput>
            </View>
        )
    }
}

export class MyButton extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={styles.button}>
                <TouchableOpacity onPress={this.props.myFunction}>
                    <Image style={styles.background} source={require('./button-background.png')}>   
                    </Image>
                    <Text style={styles.imageText}>{this.props.buttonText}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    input:{
        justifyContent:'center',
        width:350,
        height:70,
        paddingLeft: 10,
        borderWidth: 1,
        marginBottom: 5,
        fontSize:30,
    },

    button:{
        marginTop: 20,
    },
    background:{
       height:70,
       width: 350,   
    },
    imageText:{
        position:'absolute',
        marginLeft: 140,
        marginTop: 20,
        fontSize:20,
        color:'white',

        
        
    }
})
    
