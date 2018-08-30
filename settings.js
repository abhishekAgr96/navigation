import React,{Component} from 'react';
import {Text,Slider,Switch,View,StyleSheet} from 'react-native';
import {CheckBox,Icon} from 'react-native-elements'
// import Icon from 'react-native-vector-icons/I'

export class Settings extends Component{
    constructor(props){
        super(props);
        this.state={
            switch1Value:false,
            switch2Value:false
        }
    }
    render(){
        return(
           <View style={styles.container}> 
                <View style={styles.content}>
                    <Text style={styles.contentText}>Setting 1</Text>
                    <Switch onTintColor='#FF6D3E' thumbTintColor='#FF6D3E' value={this.state.switch1Value} onValueChange={()=>{this.toggle()}}  style={styles.switch}></Switch>
                </View>
                <View style={styles.content}>
                    <Text style={styles.contentText}>Setting 2</Text>
                    <Switch onTintColor='#FF6D3E' thumbTintColor='#FF6D3E' value={this.state.switch2Value} onValueChange={()=>{this.toggle()}} style={styles.switch}></Switch>
                </View>
                <View style={styles.heading}>
                    <Text style={styles.headingText}>Notifications</Text>
                </View>
                <View style={styles.content}>
                <Icon
  name='rowing' />
                    <Text style={styles.contentText}>Account info</Text>
                </View>
                <View style={styles.content}>
                    <CheckBox></CheckBox>
                    <Text style={styles.contentText}>Newsletter</Text>
                </View>
                <View style={styles.heading}>
                    <Text style={styles.headingText}>Brightness</Text>
                </View>
                <View style={styles.content}>
                    <Slider style={styles.slider}></Slider>
                </View>
                
            </View> 
        )
    }
    toggle=()=>{
        // alert('clicked')
        if(this.state.switch1Value){
        this.setState({switch1Value:false});
        this.setState({switch2Value:true});
        }
        else{
            this.setState({switch1Value:true});
        this.setState({switch2Value:false});
        }
    }
    
}
const styles=StyleSheet.create({
    container: {
        // flex: 1,
        // 
     //    alignItems: 'center',
      },
      content:{
        height:70,
        
        borderBottomWidth: .5,
        flexDirection: 'row',
        
      },
      heading:{
          height:60,
          backgroundColor:'#b3c0d3',
          justifyContent: 'center',
          borderBottomWidth: .5,
        
      },
      contentText:{
        marginLeft:15,
        fontSize:20,
        marginTop: 20,
        width:350,
       
      },
      headingText:{
        marginLeft:15,
        fontSize:20,
        fontWeight: 'bold',
       
      },
      switch:{
        
          
        },
     slider:{
         width:400,
         marginLeft: 10,
     }   

      
})
