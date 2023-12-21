import React from "react";  
import { StyleSheet,View ,Image,Text, Button, ScrollView} from "react-native";
import dustbin from '../assets/poubelle2.png';
import cape from '../assets/cadanar.png';
import rise from '../assets/resin.jpeg';
import pale from '../assets/pomme.png';
import image1 from '../assets/prev_80px.png';
import orange from '../assets/orange.png';
import resin from '../assets/raisain.png';

const page3 =({navigation})=>{
     return(
       <ScrollView vertical>
       <View>
       <View style={{backgroundColor:'#ffffff', height:'50em'}}>
           
           <View>
               {<Image source={image1} style={{height:50, width:50}}/>}
           </View>
           <View>
           {<Image source={cape} style={{height:50, width:50, left:'20em', marginTop:'-3.5em'}}/>}
           </View>
           <View style={{fontSize:20,marginTop:20, top:-5}}>
               <Text style={{fontSize:'20', fontWeight:600}}>My</Text>
               <Text style={{marginTop:10, fontSize:20}}>Order</Text>
           </View>
           
           <View>
               {<Image source={orange} style={{ marginTop:50,height:50,width:50,  marginLeft:10}}/>}
               <Text style={{fontFamily:'TimesNewRoman',left:'8em', marginTop:'-2.5em',  fontSize:19}}>1 x
               <Text style={{left:10, fontFamily:'TimesNewRoman'}}> Orange</Text>
               <Text style={{display:'flex', marginLeft:31, fontFamily:'TimesNewRoman'}}>$10</Text></Text>
               {<Image source={dustbin} style={{width:20, height:30, marginLeft:'20em', marginTop:'-2em'}}/>}
           </View>
           
        
           <View>
           {<Image source={rise} style={{height:50,width:50, marginTop:50, marginLeft:10}}/>}
               <Text style={{left:'8em', marginTop:'-2.5em' ,fontFamily:'TimesNewRoman',fontSize:19}}>1 x
               <Text style={{left:10, fontFamily:'TimesNewRoman',fontSize:19}}> Strawberry</Text>
               <Text style={{display:'flex', marginLeft:31, fontFamily:'TimesNewRoman', fontSize:19}}>$12</Text></Text>
               {<Image source={dustbin} style={{width:20, marginLeft:'20em', height:30, marginTop:'-2em'}}/>}
           </View>
           
           <View>
           {<Image source={pale} style={{height:50,width:50, marginTop:50, marginLeft:10}}/>}
               <Text style={{left:'8em', marginTop:'-2.5em', fontFamily:'TimesNewRoman',fontSize:19}}>1 x
               <Text style={{left:10, fontFamily:'TimesNewRoman', fontSize:19}}> Green Apple</Text>
               <Text style={{display:'flex',fontFamily:'TimesNewRoman', marginLeft:31,fontSize:19}}>$13</Text></Text>
               {<Image source={dustbin} style={{width:20, height:30, marginLeft:'20em', marginTop:'-2em'}}/>}
           </View>
        
           <View>
           {<Image source={resin} style={{height:50,width:50, marginTop:50, marginLeft:10}}/>}
               <Text style={{left:'8em', marginTop:'-2.5em', fontFamily:'TimesNewRoman', fontSize:19}}>1 x
               <Text style={{fontSize:19,left:10}}> Grape</Text>
               <Text style={{display:'flex',fontSize:19, marginLeft:31}}>$12</Text></Text>
               {<Image source={dustbin} style={{width:20, height:30, marginLeft:'20em', marginTop:'-2em'}}/>}
               <View>
               <View  style={{height:'100em', marginTop:'2em', top:-15}}>
                   <Text style={{ fontFamily:'TimesNewRoman', fontSize:30}}>Total Price
                   <Text style={{marginLeft:'20em', fontFamily:'TimesNewRoman'}}>$50</Text></Text>
                   <View  style={style.lasted}>
                  <Text style={{color:'white', textAlign:'center', top:3}}>PAYMENT</Text>
                   </View>
                  
               </View>
               <View>
               </View>
                   
           </View>
           </View>  
   </View>

       </View>
       </ScrollView>
    
    
     )
}

const style=StyleSheet.create({


lasted:{
    marginTop:'5em',
     marginLeft:'9em',
     width:100,
      height:30,
      backgroundColor:'#ff9999',
       borderRadius:13, 
       top:-60
}


});
export default page3;
