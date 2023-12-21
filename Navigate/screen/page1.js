import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,View,Image, ScrollView,Button} from 'react-native';
import bring from '../assets/boutique.png'
import bring2 from '../assets/boutique2.png'
import home from '../assets/menu.png';
import bled from '../assets/cream.jpg'

import orange from '../assets/orange.png';
import resin from '../assets/raisain.png';


const page1 = ({navigation}) => {
  return (
    <ScrollView vertical>
    <View style={{backgroundColor:'#ffffff'}}>
      <View>
        <View style={style.head}>
          {<Image source={bled} 
          style={{width: 50, height: 50, borderRadius:20,marginLeft:330}}/>}
        </View>
        <View style={style.head}>
          {<Image source={home} 
          style={{ borderRadius:3, width: 60, height: 50,marginRight:320, marginTop:'-7em'}}/>}
        </View>
      </View>
      <View>
        <Text style={style.titre}>Discover Seasonal</Text>
        <View>
          <Text style={style.titre}>Fruits and Vegetables</Text>
        </View>
      </View>
      <ScrollView horizontal>
      <View style={style.array} >
        <Text style={style.orgi}>Orange</Text>
        <Text style={{fontSize:20,  fontFamily:'TimesNewRoman'}}>Grape</Text>
        <Text style={{fontSize:20,  fontFamily:'TimesNewRoman'}}>pineapple</Text>
        <Text style={{fontSize:20,  fontFamily:'TimesNewRoman'}}>straven</Text>
      </View>
      </ScrollView>
      <ScrollView horizontal>
      <View style={style.cadrage}>
        <View style={style.cadre1}>
          { <Image 
          source={orange} style={{width:150, height:120, top:-13}}/> }
          <Text 
          style={style.inert}>Orange     
          <Text style={style.grips}>$10</Text></Text>
          <View style={style.button}>
          <Text 
          style={style.carer}>ADD</Text>
          </View>
        </View>
        <View style={style.cadreLip}>
        <Image source={resin} 
        style={{height:100,width:90}}/>
        <Text 
        style={{  fontFamily:'TimesNewRoman', color: '#bb8b89', fontSize:20,fontWeight:'bold'}}>Grape     
        <Text style={{fontSize:20,fontWeight:'bold', color:'#a6814a', left:10}}>$10</Text></Text>
        <View style={style.button1}>
        <Text style={style.carer}>ADD</Text>
        </View>
      </View>
      </View>
      </ScrollView>
      <ScrollView horizontal>

      <View>
      <View>
        <Text style={{fontFamily:'TimesNewRoman', fontSize:19}}>Nearby Shop</Text>
      </View>
      <View style={style.prop}>
      <View style={style.propi}>
      <View>
        {<Image source={bring2} style={{width:50, height:50,marginRight:200}} /> }
       <View style={style.dripi}>
        <View>
          <Text style={{marginLeft:100, marginTop:'-4em'}}>Xender Shop</Text>
          <View>
            <Text style={{marginLeft:100}}>20396 Toltrica Street</Text>
          </View>
          <View>
            <Text style={{marginLeft:100}}>9A.M  7P.M</Text>
          </View>
        </View>
       </View>
      </View>
      </View>
      </View>
      <View style={style.div}>
      <View style={style.propi}>
      <View>
        { <Image source={bring} style={{width:50, height:50,marginRight:200}} />}
       <View style={style.dripi}>
        <View>
          <Text style={{marginLeft:100, marginTop:'-4em'}}>Xender Shop</Text>
          <View>
            <Text style={{marginLeft:100}}>20396 Toltrica Street</Text>
          </View>
          <View>
            <Text style={{marginLeft:100}}>9A.M  7P.M</Text>
          </View>
     
        </View>
       </View>
      </View>
      </View>
      </View>
      </View>
      </ScrollView>
  </View>
  </ScrollView>
  )
}
const style=StyleSheet.create({
 titre:{
  fontSize:20,
  fontFamily:'TimesNewRoman'
 },

 inert:{
  fontFamily:'TimesNewRoman',
  color: '#bb8b89',
  fontWeight:'bold',
   fontSize:20,
   left:-15, 
   bottom:7.5
 },

 grips:{
  fontWeight:'bold',
  fontSize:18,
  color:'#a6814a',
   left:10


 },

 carer:{
  color: '#fff',
   display:'flex',
   justifyContent:'center',
     fontFamily:'TimesNewRoman',
     alignContent:'center'
 },

 array:{
  display:'flex',
 flexDirection:'row',
  justifyContent:'space-between',
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop:20,
 paddingBottom:20,
  marginBottom:20,
  gap:20,
  padding:5,
  borderRadius: 20,
  marginRight:'-1em'


 },

 orgi:{
  backgroundColor: '#fddbdc',
  fontSize: 18 ,
  padding:5,
  borderRadius: 20,
  alignItems: 'center',
  justifyContent: 'center',
  color: '#bb8b89',
  fontFamily:'TimesNewRoman'
 },

 container:{
  flex: 1,
  fontFamily: 'TimesNewRoman',
  padding: 15,
  
 },
 head:{
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: 30,
  width: '100%',
  marginLeft:20,
 },

 Fruit:{
  fontSize: 22
 },
 cadrage:{
  display:'flex',
  flexDirection:'row',
  columnGap:20,
  marginBottom:30,
  marginLeft:20,
 },
 cadre1:{
  width: 200,
  height: 250,
  backgroundColor: '#fce9c8',
  borderRadius: 20,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
 },
 
 cadre2:{
  display:'flex',
  flexDirection:'row',
 

 },
 cadreLip:{
  backgroundColor: '#d9defe',
  borderRadius: 20,
  width: 200,
  height: 250,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
 },
 button1:{
  width: 100,
  backgroundColor: '#3244aa',
  padding: 5,
  borderRadius: 9999,
  fontSize: 15,
  fontWeight: 'bold',
  textAlign: 'center',
  justifyContent:'center',
  alignContent:'center',
  top:8,
 },
 button:{
  width: 100,
  backgroundColor: '#f49e09',
  padding: 5,
  borderRadius: 9999,
  fontSize: 15,
  fontWeight: 'bold',
  textAlign: 'center',
  justifyContent:'center',
  alignContent:'center',
 },
 propi:{
  borderColor:  '#fce9c8',
  width:290,
  height:90,
  display:'flex',
  justifyContent:'center',
  alignContent:'center',
  padding:5,
  borderRadius:15,
  borderWidth:1,
  columnGap:10,
  flexDirection:'row'

 },
 prop:{
  display:'flex',
  flexDirection:'row',
  gap:20,
  marginTop:30
 },
  
 div:{
    marginTop:'-5.7em',
    marginLeft:'20em',
    
 },
 dripi:{
  flexDirection:'column',
  marginRight:'15',
 fontSize:3,
 padding:10
}
});

export default page1;
