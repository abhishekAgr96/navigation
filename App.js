/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Ionicons} from 'react-native';
import {SignIn} from './signIn'
import {SignUp} from './signUp'
import {Profile} from './profile'
import {Dashboard} from './dashboard'
import {createStackNavigator,createBottomTabNavigator} from 'react-navigation';
import {Settings} from './settings'

class tabContainer extends Component{
  render(){
    return(
      <TabNavigation/>
    );
  }
}

export default stackNavigation = createStackNavigator({
  SignIn: { screen:  SignIn},
  SignUp: { screen: SignUp },
  MidScreen:{screen:tabContainer}
},
{
     initialRouteParams:{
       email:'abhi@gmail.com',
       password:'abhipassword'
     }
});

const TabNavigation=createBottomTabNavigator({
  
  Dashboard:{screen:Dashboard},
// UserList:{screen:UserList},
Profile:{screen:Profile},
Settings:{screen:Settings},
 })

//export default tabNavigation;
// {
//   navigationOptions: ({ navigation }) => ({
//     tabBarIcon: () => {
//       const { routeName } = navigation.state;
//       let iconName;
//       if (routeName === 'SignIn') {
//         iconName = 'add';
//       } else if (routeName === 'SignUp') {
//         iconName = 'add';
//       }

//       // You can return any component that you like here! We usually use an
//       // icon component from react-native-vector-icons
//       return <Ionicons name={iconName} size={25}  />;
//     },
//   }),
//   tabBarOptions: {
//     activeTintColor: 'tomato',
//     inactiveTintColor: 'gray',
//   },
// }

// export default tabNavigation;
// export default stackNavigation;
