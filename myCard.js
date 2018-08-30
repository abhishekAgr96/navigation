import React,{Component} from 'react'
import {Text,View,Image,StyleSheet} from 'react-native'

export class MyCard extends Component{
    constructor(props){
        super(props);
    }     
    render(){
        return(
            <View style={styles.card}>
                  <View style={styles.info}>
                    {/* <Image style={styles.dp} source={{uri:this.state.userDp}}></Image> */}
                    <Image style={styles.dp} source={{uri:this.props.userDp}}></Image>
                    <View style={styles.name}>
                      <Text>{this.props.userName}</Text>
                      <Text style={{color:'red'}}>@dropperidiot</Text> 
                    </View>
                    <View style={styles.location}>
                      <Text>{this.props.location}</Text>
                      <Text style={{color:'red'}}>{this.props.time} minutes ago</Text>
                    </View>
                    <Image style={{height:40,width:30,marginLeft:375,marginTop:-25}} source={require('./maps-and-flags.png')}></Image>
                  </View>
                  <Image style={styles.upload} source={{uri:this.props.pic}}></Image>
                  <View >
                    <View style={styles.description}>
                      <Text>{this.props.description}</Text> 
                    </View>
                    <View style={styles.arrow}>
                      <Image  source={require('./right-arrow.png')}></Image>
                    </View>
                  </View>   
                </View>
        )
    }
    
    
}

const styles = StyleSheet.create({
    
    dp:{
      height:50,
      width:60,
      position:"absolute",
      left:5,
      top:5
    },
    card:{
      position:"relative",
      borderBottomWidth: 1,
    },
    name:{
      position:"absolute",
      left:80,
      top:15
    },
    location:{
      left:280,
      top:15
    },
    symbol:{
      height:50,
      width:30,
    },
    upload:{
      height:200,
      width:500,
      marginTop:20,
      // position:"relative",
      // top:20
    },
    description:{
      
      marginTop: 10,
      left:15,
      height:35,
      width:330,
    },
    arrow:{
      position:'absolute',
      height:40,
      width:40,
      marginLeft:370,
      marginTop:15,
    }
  
  });
  