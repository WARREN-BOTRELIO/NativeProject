import React  from "react";
import { StyleSheet, View, Image, ScrollView ,Text} from "react-native";  
import dems from '../assets/download.png';
import bean from '../assets/choux.png';
import carotte from '../assets/carotte.png';
import prev from '../assets/prev_80px.png';
import info from '../assets/info_16px.png';

const page6 =(navigation)=>{
    
    return(
      <ScrollView>
            <View>
                <View>
                    {<Image source={prev} 
                    style={{height:30, width:30, left:3}}/>}
                </View>
                <View style={style.head}>
                    {<Image source={dems} style={{height:25, width:25}}/>}
                    {<Image source={info} style={{width:25,height:25 }}/>}
                </View>
                <View style={style.contain}>
                    {<Image source={bean} style={{height:100,width:100, marginTop:'4em', marginLeft:'5.5em'}}/>}
                </View>
            </View>
            <View style={style.tips}>
              <Text style={{color:'green', fontFamily:'TimesNewRoman',fontWeight:'bold', left:10}}>Vegetables</Text>
            </View>
            <View>
                <Text style={{fontSize:15, fontWeight:'bold',left:33}}>Broccoli</Text>
                <Text style={{fontWeight:'bold', left:33, fontSize:10, color:'#a3a3ac'}}>approx 100 gm</Text>
            </View>
            <View style={{left:'22em', top:'-2em', display:'flex',flexDirection:'row'}}>
              <Text style={style.text1}>-</Text><Text style={{fontWeight:'bold',right:10}}>1</Text><Text style={style.text2}>+</Text> 
            </View>
            <View style={{left:22}}>
            {<Image source={carotte} style={{height:30, width:30, backgroundColor:'#d1e4de'}}/>}
            <Text style={{left:'3em', top:'-2.5em', fontWeight:'bold'}}>Agrifarm Inc</Text>
            <Text style={{left:'4em', top:'-3em', fontWeight:'bold', color:'#a3a3ac', fontSize:10}}>F5RJ+FJF,Chairtakol</Text>
            </View>
            <View>
                <Text style={{left:10, fontWeight:'bold'}}>Description</Text>
            </View>
            <View style={{left:10, top:10}}>
                <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
                . Explicabo debitis consectetur exercitationem unde, 
                fugiat animi! Quasi ipsum praesentium eveniet, alias nisi ut
                 laboriosam ipsa non, deserunt quas beatae adipisci excepturi?<Text style={{ color:'green'}}>Read more</Text>
                </Text>
            </View>
            <View style={style.blob}>
                <Text style={{color:'green',textAlign:'center', top:'-8', left:10}}>Add to cart $1.50</Text>
            </View>
      </ScrollView>
     
    )
}

const style=StyleSheet.create({
head:{
    display:'flex',
    flexDirection:'row',
      marginLeft:'20em',
       gap:7, 
       marginTop:'-2em'
},

contain:{
    height:200,
    width:300, 
    marginTop:'5em',
     marginLeft:'2em',
      backgroundColor:'#d1e4de'
},
tips:{
    backgroundColor:'none',
     borderRadius:8, 
     borderColor:'green', 
     width:100,
     marginTop:15,
      marginLeft:30,
       borderWidth:2
       
},

text1:{
    right:'1em',
     color:'green',
      fontWeight:'bold',
       borderColor:'green',
       display:'flex', 
       borderWidth:2,
        borderRadius:10 ,
         width:30,
         height:20,
         justifyContent:'center', 
              alignContent:'center'
              
},

text2:{
    color:'green', 
    left:-5, 
     fontWeight:'bold', 
     borderColor:'green',
      borderWidth:2,
       borderRadius:30,
        width:30,
        height:20,
        display:'flex',
        justifyContent:'center',
         alignContent:'center'
          
},

blob:{
    left:'10em',
    borderWidth:2, 
     top:'5em', 
     width:190, 
     height:30,
     borderColor:'green'
}




});
export default page6;