import {View, Text} from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';
const App = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#0a2bbf'}}>
      <View
        style={{
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 100,
          flexDirection: 'row',
          paddingLeft: 20,
          paddingRight: 20,
        }}>
        <Animatable.View
          animation={'zoomIn'}
          style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: 'orange',
          }}></Animatable.View>

        <Animatable.View
          animation={'zoomIn'}
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: '#2a4deb',
          }}></Animatable.View>
        <Animatable.View
          animation={'zoomIn'}
          style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: 'cyan',
          }}></Animatable.View>
      </View>
      <View
        style={{
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 100,
          flexDirection: 'row',
          paddingLeft: 20,
          paddingRight: 20,
        }}>
        <Animatable.View
          animation={'zoomIn'}
          style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: '#2a4deb',
          }}></Animatable.View>
        <Animatable.View
          animation={'zoomIn'}
          style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: 'orange',
          }}></Animatable.View>

        <Animatable.View
          animation={'zoomIn'}
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: 'cyan',
          }}></Animatable.View>
      </View>
      <View
        style={{
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 100,
          flexDirection: 'row',
          paddingLeft: 20,
          paddingRight: 20,
        }}>
        <Animatable.Image
          animation={'zoomIn'}
          source={require('./src/images/jio_logo.png')}
          style={{width: 180, height: 180}}></Animatable.Image>

        <Animatable.View
          animation={'zoomIn'}
          style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: 'cyan',
          }}></Animatable.View>
        <Animatable.View
          animation={'zoomIn'}
          style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: '#2a4deb',
          }}></Animatable.View>
      </View>
      <View
        style={{
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 100,
          flexDirection: 'row',
          paddingLeft: 20,
          paddingRight: 20,
        }}>
        <Animatable.View
          animation={'zoomIn'}
          style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: 'orange',
          }}></Animatable.View>
        <Animatable.View
          animation={'zoomIn'}
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: '#2a4deb',
          }}></Animatable.View>

        <Animatable.View
          animation={'zoomIn'}
          style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: 'cyan',
          }}></Animatable.View>
      </View>
      <View
        style={{
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 100,
          flexDirection: 'row',
          paddingLeft: 20,
          paddingRight: 20,
        }}>
        <Animatable.View
          animation={'zoomIn'}
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: '#2a4deb',
          }}></Animatable.View>
        <Animatable.View
          animation={'zoomIn'}
          style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: 'cyan',
          }}></Animatable.View>
        <Animatable.View
          animation={'zoomIn'}
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: 'orange',
          }}></Animatable.View>
      </View>
    </View>
  );
};

export default App;
