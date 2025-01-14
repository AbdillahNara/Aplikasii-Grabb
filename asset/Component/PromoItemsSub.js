import React, {Component} from "react"
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const{width} = Dimensions.get('window')
const styles = StyleSheet.create({
    wrapper: {
        backgroundColor:'white',
        elevation:4,
        borderRadius:8,
        width : width / 2 - 27,
        marginRight:18,
        marginBottom:18

    },
    promoImage: {
        height : width/2-27,
        width : width/2-27,
        borderTopleftRadius : 10,
        borderTopRightRadius: 10
    },

    textPromo:  {
        marginLeft: 10, marginVertical:10
    },
    textDiskon:   {
        position: 'absolute',
        top:10,
        backgroundColor:'white',
        padding:4,
        borderRadius:4,
        left:4
    }
})

const PromoItemsSub = (props) => {
    return (
        <View style={styles.wrapper}>
           <Image source={props.image} style={styles.promoImage}/>
           <View style={styles.textPromo}>
           <Text style={{fontWeight:'bold',fontSize:15}}>{props.text}</Text>
           </View>
           {
                props.diskon ? <View style={styles.textDiskon}><Text>{props.diskon}</Text></View> :

                <View></View>

            }

                <View style={{marginLeft:10, marginBottom:8, flexDirections:'row'}}>
                <Icon name="calendar" size={20} color="#575757"/>
                <Text style={{marginLeft:8, fontSize:13, color:'#575757'}}>{props.masaBerlaku}</Text>
            </View>
        </View>
    )
}

export default PromoItemsSub