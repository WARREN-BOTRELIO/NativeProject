import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Gims from '../assets/partager.png';
import drain from '../assets/prev_80px.png';
import bleed from '../assets/orange.png';
import image from '../assets/hearts_48px.png';


const page2 = ({ navigation }) => {
    return (
        <ScrollView vertical>
            <View style={{display:'flex',justifyContent:'center',flexDirection:'column'}}>
                <View style={{ backgroundColor: '#ffffcc' }}>
                    <View>
                        {<Image source={drain} style={{ height: 30, width: 50, marginTop: 47, backgroundColor: '#ff9999' }} />}
                    </View>
                    <View>
                        {<Image source={Gims} style={{ height: 50, width: 50, left: '20em', marginTop: '-3em', top:5 }} />}
                    </View>
                    <View style={{ justifyContent: 'center', alignContent: 'center', left: '6.5em' }}>
                        <Text style={{ fontSize: 20, marginTop: '-2em' }}>Product Details</Text>
                    </View>
                    <View style={{ margin: 15 }}> 
                    <Text style={{ fontSize: 18, fontWeight:'bold' }}>Juicy Orange</Text>
                    </View>
                    <View style={{ margin: 5 }}>
                        <Text style={{ color: '#ff9999' }}> Sweet and juicy</Text>
                        </View>

                    <View style={{ margin: 15 }}>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus nostrum velit dicta quibusdam ipsam modi nulla, assumenda explicabo officiis harum ipsum ullam quos maiores nobis, quis
                            minima ad, perspiciatis blanditiis!</p>
                    </View>
                    <View style={style.bran}>
                        <Text style={style.near}>Find Nearest Store</Text>
                    </View>
                    <View style={{ marginRight: '50em'}}>
                        {<Image source={image} style={{ height: 70, width: 80, marginTop: '-4.2em' }} />}
                    </View>
                </View>
                
                
                <ScrollView horizontal>
                    <View>
                  
                         <View style={style.mile}>
                         <View style={{top:-15}}>
                              {<Image source={bleed} style={{ width: 150, height: 100, left: 120}} />}
                         </View>
                            <View >
                                <Text style={{ fontSize: 20, top:50 }}>Nutrition Facts</Text>
                            </View>
                            <View style={style.graby}>
                                <Text style={{ fontSize: 15, marginTop: '-2em' }}>Fiber 
                                <Text style={{ left: '1em', fontSize: 15 }}>3 g</Text>
                                <Text style={{ left: '44em', fontSize: 15 }}>7%</Text></Text>
                            </View>
                            <View style={style.graven}>
                                <Text style={{ fontSize: 15, marginTop: '-2em' }}>Good 
                                <Text style={{ left: '1em', fontSize: 15 }}>Sugar</Text>
                                <Text style={{ left: '44em', fontSize: 15 }}></Text>
                                <Text style={{ left: '4em' }}>12g</Text><Text style={{ left: '41em' }}>5%</Text></Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </ScrollView>

    )
};

const style=StyleSheet.create({

bran:{
    marginLeft: 100,
     backgroundColor: '#ff9999',
      height: 50,
       width: 250, 
       borderRadius: 20,
        bottom:5
},

near:{
    fontSize: 20, 
    color: '#fff',
     justifyContent: 'center',
      top:8,
       left:-16, 
       textAlign:'center',
        alignContent: 'center',
         marginLeft: 50
},

graby:{
    backgroundColor: '#ff9999',
     width: '50em',
      height: 10, 
      borderRadius: 30, 
      marginTop: 50,
       top:38
},

graven:{
    marginTop: '4em',
     backgroundColor: '#ff9999',
      width: '50em', 
      height: 10,
       borderRadius: 50 ,
       top:40
},

mile:{
    height:700,
    backgroundColor: '#ffffff' ,
    top:0,
     borderRadius:30,
      borderTopRightRadius:15
}

});

export default page2;