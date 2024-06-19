import React from 'react'
import {Image,Text, View, StyleSheet} from 'react-native'
import FiturUtamaSub  from './FiturUtamaSub'
import { useNavigation } from '@react-navigation/native';



const styles = StyleSheet.create({
    wrapperFiturUtama:  {
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:15,
        flexWrap:'wrap',
        width:'100%'
    }
  })
const OvoComponent = () => {
    const navigation = useNavigation();
    return(
        <View style={styles.wrapperFiturUtama}>
            <FiturUtamaSub onPress={() => navigation.navigate('Food')} image={require('../icon/food.jpg')} title="Food"/>
            <FiturUtamaSub image={require('../icon/bike.jpg')} title="Bike"/>
            <FiturUtamaSub image={require('../icon/car.jpg')} title="Car"/>
            <FiturUtamaSub image={require('../icon/send.jpg')} title="Delivery"/>
            <FiturUtamaSub image={require('../icon/subscribe.jpg')} title="Subcription"/>
            <FiturUtamaSub image={require('../icon/doctor.jpg')} title="Doctor"/>
            <FiturUtamaSub image={require('../icon/pulsa.jpg')} title="Pulsa/Token"/>
            <FiturUtamaSub image={require('../icon/more.jpg')} title="More"/>
          </View>
    )

}

export default OvoComponent