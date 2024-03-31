/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import ClassroomScreen from './ClassroomScreen';
import FrontPage from './frontpage';


import {
  Button,
  Text,
  View,
  StyleSheet,
  TextInput,
  Alert,
  FlatList,
  ScrollView,
  SectionList,

} from 'react-native';


// import { useState } from 'react';




const App = () => {
 



  return (
   
     
      // <ClassroomScreen/>
      <FrontPage/>
    
   
   
  )
}









export default App;

//listinf of states---->to pass props from child to parent
// we cant share the states data between components every comp hs own state data & can share props data
