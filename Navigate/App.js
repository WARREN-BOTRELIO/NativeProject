import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Page1 from "./screen/page1";
import Page2 from "./screen/page2"; 
import Page3 from "./screen/page3";
import Page4 from "./screen/page4";
import Page5 from "./screen/page5";
import Page6 from "./screen/page6";
const Tab=createBottomTabNavigator();

export default function App(){

  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Menu1" component={Page1} />
        <Tab.Screen name="Menu2" component={Page2}/>
        <Tab.Screen name="Menu3" component={Page3}/>
        <Tab.Screen name="Menu4" component={Page4}/>
        <Tab.Screen name="Menu5" component={Page5}/>
        <Tab.Screen name="Menu6" component={Page6}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}