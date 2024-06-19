import React from 'react'
import {Image,Text, View, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    wrapperPay: {
      flexDirection:'row',
      justifyContent:'space-between'
    },
  
    ovoFeaturImage: {
      height: 45,
      width: 45,
      marginTop:17,
      marginHorizontal:40,
    }
  })
const OvoComponent = () => {
    return(
        <View style={styles.wrapperPay}>
            <View>
            <Image style={styles.ovoFeaturImage} source={require('../icon/pay.jpg')}/>
            <Text style={{alignSelf:'center',marginTop:5}}>Pay</Text>

            </View>
            <View>
            <Image style={styles.ovoFeaturImage} source={require('../icon/topup.jpg')}/>
            <Text style={{alignSelf:'center',marginTop:5}}>TopUp</Text>

            </View>
            <View>
            <Image style={styles.ovoFeaturImage} source={require('../icon/reward.jpg')}/>
            <Text style={{alignSelf:'center',marginTop:5}}>Reward</Text>

            </View>
          </View>
    )

}

export default OvoComponent