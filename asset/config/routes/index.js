import { Text, View , Image} from 'react-native'
import React, { Component } from 'react'

import{NavigationContainer} from '@react-navigation/native'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import {createStackNavigator} from '@react-navigation/stack'


import {Home, Activity, Inbox, Payment,Account, Food, Login} from '../../page/index'
const MaterialBottom = createMaterialBottomTabNavigator ();
// const Stack= createStackNavigator();

// const HomeStack = () =>{
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name=  "Home" component={Home}/>
//       <Stack.Screen name = "Food" component={Food}/>
//     </Stack.Navigator>
//   )
// }

export default class index extends Component {
  render() {
    return (
        <NavigationContainer>
            <MaterialBottom.Navigator
                shifting={false}
                initialRouteName='Home'
                activeColor='#09AB54'
                inactiveColor='#676767'
                barStyle={{backgroundColor:'white',borderWidth:.3,borderColor:'Lightgrey'}}
            
            >
                <MaterialBottom.Screen name="Home" component={Home}
                    options={{
                      tabBarLabel:'Home',
                      tabBarIcon:({color}) => (
                        <View style={{marginTop:-4}}>
                          {
                            color =="#09AB54" ?
                            <Image source={require('../../icon/nav-home-active.jpg')} style={{height:30,width:30}}/>
                            :
                            <Image source={require('../../icon/nav-home.jpg')} style={{height:30,width:30}}/>
                         } 
                          
                        </View>
                      )
                    }}
                
                />
                <MaterialBottom.Screen name="Activity" component={Activity}
                options={{
                  tabBarLabel:'Activity',
                  tabBarIcon:({color}) => (
                    <View style={{marginTop:-4}}>
                      {
                        color =="#09AB54" ?
                        <Image source={require('../../icon/nav-activity-active.jpg')} style={{height:30,width:30}}/>
                        :
                        <Image source={require('../../icon/nav-activity.jpg')} style={{height:30,width:30}}/>
                     } 
                      
                    </View>
                  )
                }}
                />
                <MaterialBottom.Screen name="Inbox" component={Inbox}
                options={{
                  tabBarLabel:'Inbox',
                  tabBarIcon:({color}) => (
                    <View style={{marginTop:-4}}>
                      {
                        color =="#09AB54" ?
                        <Image source={require('../../icon/nav-inbox-active.jpg')} style={{height:30,width:30}}/>
                        :
                        <Image source={require('../../icon/nav-inbox.jpg')} style={{height:30,width:30}}/>
                     } 
                      
                    </View>
                  ),
                  tabBarBadge:1
                }}
                />
                <MaterialBottom.Screen name="Payment" component={Payment}
                options={{
                  tabBarLabel:'Payment',
                  tabBarIcon:({color}) => (
                    <View style={{marginTop:-4}}>
                      {
                        color =="#09AB54" ?
                        <Image source={require('../../icon/nav-payment-active.jpg')} style={{height:30,width:30}}/>
                        :
                        <Image source={require('../../icon/nav-payment.jpg')} style={{height:30,width:30}}/>
                     } 
                      
                    </View>
                  )
                }}
                />
                 <MaterialBottom.Screen name="Account" component={Account}
                options={{
                  tabBarLabel:'Account',
                  tabBarIcon:({color}) => (
                    <View style={{marginTop:-4}}>
                      {
                        color =="#09AB54" ?
                        <Image source={require('../../icon/nav-account-active.jpg')} style={{height:30,width:30}}/>
                        :
                        <Image source={require('../../icon/nav-account.jpg')} style={{height:30,width:30}}/>
                     } 
                      
                    </View>
                  )
                }}
                />
            </MaterialBottom.Navigator>
        </NavigationContainer>
    )
  }
}