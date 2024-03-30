import {View, Text, Dimensions} from 'react-native';
import React from 'react';

const FlexDemo = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor:'red',flexDirection:'row'
      }}>
      <View
        style={{flex:1,height:'40%', backgroundColor: 'orange'}}>

        </View>
        <View
        style={{flex:2,height:'40%', backgroundColor: 'green'}}></View>
    </View>
  );
};

export default FlexDemo;
