import React from "react";
import { StyleSheet, View, Image, Text, ScrollView } from "react-native";
import pain from '../assets/plastic.jpg'
const page4 = (navigation) => {
    return (
        <View>
            <View>
                <View style={{ backgroundColor: '#e6f1ed', height: '20em' }}>
                    {<Image source={pain} style={{ width: 200, height: 300, justifyContent: 'center', alignContent: 'center', marginTop: '0.01em', marginLeft: '6em' }} />}
                </View>
            </View>
            <View style={{ height: '50em',backgroundColor: '#ffffff',  borderRadius: 60 }}>
                <View style>
                    <Text style={{ fontSize: 25, fontFamily: 'Times New Roman', marginLeft: '2em', marginTop: 50, fontWeight: 'bold' }}>Order Groceries</Text>
                    <Text style={{ fontSize: 25, fontFamily: 'Times New Roman', marginLeft: '2em', fontWeight: 'bold' }}>and Get delivered</Text>
                    <Text style={{ fontSize: 25, fontFamily: 'Times New Roman', marginLeft: '2em', fontWeight: 'bold' }}>In few minutes</Text>
                </View>
                <View style={style.driven}>
                    <Text style={style.global}>
                        Get Started
                        </Text>
                </View>
            </View>

        </View>
    )
}

const style=StyleSheet.create({

global:{
    
    width: 100,
    padding: 5,
    borderRadius: 9999,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    color: '#30bb84',
    textShadowColor: 'black',
    fontWeight: 'bold'

},
driven:{
    marginTop: '1em',
     borderRadius: 15,
      marginLeft: '5em',
       borderWidth: 2,
       left:20 ,
        borderColor: '#00ff99',
         width: 100, 
         justifyContent: 'center',
          alignItems: 'center',
           
}

});
export default page4;