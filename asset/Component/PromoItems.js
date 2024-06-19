import React, {Component} from 'react'
import {View, Text, Stylesheet,} from 'react-native'
import PromoItemsSub from './PromoItemsSub'

const PromoItems = () => {
    return (
        <View style={{marginHorizontal:18, width:'100%',flexWrap:'wrap',flexDirection:'row'}}>
            <PromoItemsSub
                 image={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv1CIdxCUWffenVmj833eiN7LI2yM_cQVT1w&s"}}
                 text ="Makanan Khas Betawi"
                 diskon= "Diskon 40%"
                 masaBerlaku="Until 22 Agustus"

            />

            <PromoItemsSub
                 image={{uri: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/101/MTA-150837660/no-brand_tumpeng-nasi-kuning-poksifood-10porsi_full01.jpg"}}
                 text ="Nasi Kuning Tumpeng"
                 diskon= "Diskon 30%"
                 masaBerlaku="Until 28 September "
            />

            <PromoItemsSub
                 image={{uri: "https://asset.kompas.com/crops/89gV9XIgLw8Tzv2im_h4C9aEjd8=/0x0:993x662/750x500/data/photo/2021/03/27/605ed24c33816.jpg"}}
                 text ="Sate Madura"
                 diskon= "Diskon 35%"
                 masaBerlaku="Until 19 Desember "
            />  
             <PromoItemsSub
                 image={{uri: "https://beritajatim.com/cdn-cgi/image/quality=70,format=auto,onerror=redirect,metadata=none/wp-content/uploads/2022/12/E4F92GFVkAQwSFc.jpg?fit=290%2C300&ssl=1"}}
                 text ="Bakso Mang Ecep"
                 diskon= "Diskon 28%"
                 masaBerlaku="Until 17 November "
            />
             <PromoItemsSub
                 image={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv1CIdxCUWffenVmj833eiN7LI2yM_cQVT1w&s"}}
                 text ="Makanan Khas Betawi"
                 diskon= "Diskon 40%"
                 masaBerlaku="Until 22 Agustus"

            />

            <PromoItemsSub
                 image={{uri: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/101/MTA-150837660/no-brand_tumpeng-nasi-kuning-poksifood-10porsi_full01.jpg"}}
                 text ="Nasi Kuning Tumpeng"
                 diskon= "Diskon 30%"
                 masaBerlaku="Until 28 September "
            />

            <PromoItemsSub
                 image={{uri: "https://asset.kompas.com/crops/89gV9XIgLw8Tzv2im_h4C9aEjd8=/0x0:993x662/750x500/data/photo/2021/03/27/605ed24c33816.jpg"}}
                 text ="Sate Madura"
                 diskon= "Diskon 35%"
                 masaBerlaku="Until 19 Desember "
            />  
             <PromoItemsSub
                 image={{uri: "https://beritajatim.com/cdn-cgi/image/quality=70,format=auto,onerror=redirect,metadata=none/wp-content/uploads/2022/12/E4F92GFVkAQwSFc.jpg?fit=290%2C300&ssl=1"}}
                 text ="Bakso Mang Ecep"
                 diskon= "Diskon 28%"
                 masaBerlaku="Until 17 November "
            />



        </View>
    )
}

export default PromoItems