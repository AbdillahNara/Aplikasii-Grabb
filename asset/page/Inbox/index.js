import React,{Component} from 'react'
import {View,Text, Image , Dimensions, StyleSheet, StatusBar,ScrollView} from 'react-native'
import imgBanner from '../../images/awan.jpg'
import OvoComponent from '../../Component/OvoComponent'
import FiturUtama from '../../Component/FiturUtama'
import PromoItems from '../../Component/PromoItems'

const{width } = Dimensions.get('window')

const styles = StyleSheet.create({
  imageBanner:  {
    height: 140, width:width,
  },

  greetingText: {
    fontSize: 17,
    fontWeight: 'bold',
    position:'absolute',
    alignSelf:'center',
    top:30,
    color:'#383838'
  },
  wrapperOvo: {
        marginHorizontal: 18,
        height: 150,
        marginTop:-60,
        backgroundColor:'white',
        elevation:4, 
        borderRadius:10,
      },
      textOvo: {
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:12,
        marginTop:10,
      },
      garisDiOvo: {
        height:.8,
        backgroundColor:'#adadad',
        marginTop:10,
        marginHorizontal:10
      },
      divider:  {
        width : width,
        height: 15,
        backgroundColor:'#ededed',
        marginVertical:15
      },
      wrapperPay: {
        flexDirection:'row'
      },
      ovoFeaturImage: {
        height: 45,
        width: 45,
        marginTop:17,
        marginHorizontal:40,
      }
    
    })

class Home extends Component{
  render() {
    return (
      <ScrollView style={{flex:1, backgroundColor:'white'}}>
        <StatusBar barStyle="dark-content" translucent backgroundColor="rgba(0,0,0,0)"/>
        <Image style={styles.imageBanner} source={imgBanner}/>
        <Text style={styles.greetingText}>Selamat Siang</Text>
        <View style={styles.wrapperOvo}>
        <View style={styles.textOvo}>
        <Text style={{fontSize:17,fontWeight:'bold',color:'#383838'}}> Ovo Balance</Text>
        <Text style={{fontSize:17,fontWeight:'bold',color:'#383838'}}>Rp 1.000.000</Text>
          </View>
          <View style={styles.garisDiOvo}></View>
          <OvoComponent/>
        </View>
        <View style={{marginHorizontal:18}}>
              <FiturUtama/>
          </View>
          <View style={styles.divider}></View>
          <PromoItems/>
        </ScrollView>
      
    )
  }
}
export default Home
