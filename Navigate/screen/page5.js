import React from "react";
import { StyleSheet, View ,Text, Image,TextInput, ScrollView} from "react-native";
import creed from '../assets/cream.jpg';
import bage from '../assets/choux2.jpg';
import milk from '../assets/lait.png';
import viande from  '../assets/viande.png';
import apple from '../assets/pomme.png';
import coeur from '../assets/coeur.png';
import achat from '../assets/achat.png';
import menu from '../assets/trait.png';
import peak from '../assets/pois.jpg';
import pain from '../assets/panierFruits.jpg';



const page5=({navigation})=>{
    return(
        <ScrollView vertical>
            <View>
                <Text style={{color:'black', fontSize:12}}>
                    Your Location
                </Text>
            </View>
            <View>
                <Text style={{fontSize:18}}>3892 Olen Thomas Drive, Ny</Text>
            </View>
            <View>
                {<Image source={creed} style={{height:50,width:50, marginLeft:'20em', marginTop:'-2.6em', borderRadius:30}}/>}
                <View>
                    <View style={style.cade1}>
                    <TextInput placeholder="🔎 Search foods graceries 🎙️" style={{ outline:'none',color:'#eaeaea', textAlign:"center", marginTop:3} }  />
                    </View>
                </View>
                <View>
                {<Image source={menu} style={{width:30, height:30,  borderRadius:45, left:'19em', marginTop:'-2em', backgroundColor:'#1ca56f'}}/>}
                </View>
            </View>
            <View style={{marginTop:'1.5em'}}>
                <Text style={{fontWeight:'bold', fontSize:'1em', fontFamily:'TimesNewRoman', marginLeft:'1em'}}>Categorie</Text>
            </View>
            <View style={{marginTop:'-1.2em'}}>
                <Text style={{fontWeight:'bold', fontSize:'1em', fontFamily:'TimesNewRoman', marginLeft:'19em', color:'#00ff99'}}>See all</Text>
            </View>
            <View style={style.cadre2}>
                {<Image source={bage}style={{height:50, width:50, borderRadius:25, left:5}}/>}
                {<Image source={milk}style={{height:50, width:50, borderRadius:25, left:5}}/>}
                {<Image source={viande}style={{height:50, width:50, borderRadius:25, left:5}}/>}
                {<Image source={apple}style={{height:50, width:50, borderRadius:25, left:5}}/>}
                {<Image source={peak}style={{height:50, width:50, borderRadius:25, left:5}}/>}
            </View>
            <View style={{marginTop:'1em'}}>
            <Text style={{fontWeight:'bold', fontSize:'1em', fontFamily:'TimesNewRoman', marginLeft:'1em'}}>Deals</Text>
            </View>
            <View style={{marginTop:'-1.2em'}}>
                <Text style={{fontWeight:'bold', fontSize:'1em', fontFamily:'TimesNewRoman', marginLeft:'19em', color:'#00ff99'}}>See all</Text>
            </View>
            <View style={style.box}>
                <Text style={{fontWeight:'bold', fontSize:20, marginTop:'1em'}}>50% OFF</Text>
                <Text style={{fontWeight:'bold', fontSize:20}}>on Grocery combo packs</Text>
                <View style={{backgroundColor:'#fff', width:50, borderRadius:30, marginLeft:20}}>
                <Text style={{fontWeight:'bold', fontSize:12, color:'#000000'}}>Shop now</Text>
                </View>
                {<Image source={pain} style={{height:70, width:70, marginLeft:'15em', marginTop:'-4.9em'}}/>}
            </View>
            <View style={{marginTop:'1.2em'}}>
            <Text style={{fontWeight:'bold', fontSize:'1em', fontFamily:'TimesNewRoman', marginLeft:'1em'}}>Popular Items</Text>
            </View>
            <View style={{marginTop:'-1em'}}>
                <Text style={{fontWeight:'bold', fontSize:'1em', fontFamily:'TimesNewRoman', marginLeft:'19em', color:'#00ff99'}}>See all</Text>
            </View>
            <View style={style.brise1}>
                {<Image source={apple}style={{height:50, width:50, left:20}}/>}
                {<Image source={coeur}style={{height:13, width:13, marginLeft:'6em', marginTop:'-2.5em', borderRadius:25}}/>}
                <Text style={{top:52, fontWeight:'bold', left:10}}>Apple</Text>
                <Text style={{top:52, fontWeight:'bold', left:10}}>$ 12.5</Text>
                {<Image source={achat}style={{height:20, width:20, marginLeft:'5em', marginTop:'1.8em'}}/>}
            </View>
            <View style={style.brise2}>
                {<Image source={viande}style={{height:50, width:50, left:20}}/>}
                {<Image source={coeur}style={{height:15, width:15, marginLeft:'6em', marginTop:'-2.5em', borderRadius:25}}/>}
                <Text style={{top:52, fontWeight:'bold', left:10}}>Beef</Text>
                <Text style={{top:52, fontWeight:'bold', left:10}}>$ 12.5</Text>
                {<Image source={achat}style={{height:20, width:20, marginLeft:'5em', marginTop:'1.8em'}}/>}
            </View>
            <View style={style.brise3}>
                {<Image source={peak}style={{height:50, width:50, left:20}}/>}
                {<Image source={coeur}style={{height:15, width:15, marginLeft:'6em', marginTop:'-2.5em', borderRadius:25}}/>}
                <Text style={{top:52, fontWeight:'bold', left:10}}>Bitroot</Text>
                <Text style={{top:52, fontWeight:'bold', left:10}}>$ 12.5</Text>
                {<Image source={achat}style={{height:20, width:20, marginLeft:'5em', marginTop:'1.8em'}}/>}
            </View>
        </ScrollView>
    )
}

const style=StyleSheet.create({
cade1:{
    marginLeft:'1.5em',
    marginTop:'2em', 
     width:240,
     backgroundColor:'#ffffff',
       height:30,
       borderRadius:30
},

cadre2:{
    justifyContent:'center',
    alignContent:'center', 
    flexDirection:'row',
     columnGap:30
},

box:{
    marginTop:'2em', 
    marginLeft:'2em',
    borderRadius:25,
    backgroundColor:'#dff4eb',
    height:100, 
    width:'20em',
    
},

brise1:{
    marginTop:20,
    borderRadius:8,
     marginLeft:15,
      backgroundColor:'#fff',
      width:120,
      height:140
},

brise2:{
    marginTop:'-8.7em',
    borderRadius:8,
      marginLeft:'10em',
       backgroundColor:'#fff', 
       width:120,
        height:140
},

brise3:{
    marginTop:'-8.7em',
    marginLeft:'20em',
    borderRadius:8,
    backgroundColor:'#fff',
    width:120,
     height:140
}

});
export default page5;