/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { MapView } from 'react-native-amap3d'
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {

  // static navigationOptions = ({ navigation }) => {
  //   const { state, setParams } = navigation
  //   state.params = state.params || { mapType: 'standard' }
  //   const props = {
  //     mode: 'dropdown',
  //     style: { width: 100 },
  //     selectedValue: state.params.mapType,
  //     onValueChange: mapType => setParams({ mapType }),
  //   }
  //   return {
  //     title: '地图模式',
  //     headerRight: (
  //       <Picker {...props}>
  //         <Picker.Item label="标准" value="standard" />
  //         <Picker.Item label="卫星" value="satellite" />
  //         <Picker.Item label="导航" value="navigation" />
  //         <Picker.Item label="夜间" value="night" />
  //         <Picker.Item label="公交" value="bus" />
  //       </Picker>
  //     ),
  //   }
  // }

  render() {
    return (
        <MapView
          locationEnabled = {true}
          distanceFilter={100}
          onLocation={({ nativeEvent }) =>console.log(`${nativeEvent.latitude},${nativeEvent.longitude},${nativeEvent.timestamp},${nativeEvent.speed},${nativeEvent.accuracy}`)}
          showsLocationButton
          showsBuildings
          showsCompass
          showsZoomControls
          zoomEnabled
          scrollEnabled
          rotateEnabled
          tiltEnabled
          mapType={'standard'}
          showsScale
          style={StyleSheet.absoluteFill}
          locationType={'location_rotate_no_center'}
          >
            <MapView.Marker
              draggable
              active
              color={'red'}
              title='将我拖拽到公司地址~'
              description = '请长按~'
              onDragEnd={({ nativeEvent }) =>console.log(`${nativeEvent.latitude}, ${nativeEvent.longitude}`)}
              coordinate={{
                latitude: 39.955384086445804,
                longitude: 116.33783608675003,
              }}
            />
          </MapView>
        
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
