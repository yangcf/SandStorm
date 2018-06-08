/**
 * Created by 杨超凡 on 2018/6/7.
 * 打卡监控页面
 */
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Picker,
  Vibration,
  Alert
} from 'react-native';
import { MapView } from 'react-native-amap3d'
import ComHeader from '../components/ComHeader'

const EARTH_RADIUS = 6378137.0;    //单位M
const PI = Math.PI;
export default class Amap extends Component {
    constructor(props){
        super(props);
        this.state = {
            location:{
                latitude: 39.955384086445804,
                longitude: 116.33783608675003,
            },
            mapType: 'standard',
            localState: false,
            initCoordinate: {
                latitude: 39.955384086445804,
                longitude: 116.33783608675003,
            },
            vibrate: false
        }
        
    }

  _renderLeft(){
    return (
        <Button title={this.state.localState?'正在监控,点击关闭':'开启监控'} onPress={()=>{
                this.setState({
                    localState: !this.state.localState
                });
        }} />
    )
  }
  _renderTitle(){
      return (
          <View>
            <Text style={{color:'white'}}>打卡监控</Text>
          </View>
      )
  }
_renderRight(){
    let pickerConfig = {
        mode: 'dialog',
        style: { width: 65},
        onValueChange: mapType => {
            this.setState({
                mapType: mapType
            })
        },
    }
    return (
        <Picker {...pickerConfig}>
          <Picker.Item label="模式" value="standard" />
          <Picker.Item label="标准" value="standard" />
          <Picker.Item label="卫星" value="satellite" />
          <Picker.Item label="导航" value="navigation" />
          <Picker.Item label="夜间" value="night" />
          <Picker.Item label="公交" value="bus" />
        </Picker>
    )
  }

  _onLocation(evt){
    console.log(`${evt.latitude},${evt.longitude},${evt.timestamp},${evt.speed},${evt.accuracy}`);
    this.etGreatCircleDistance(evt.latitude,evt.longitude,this.state.location.latitude,this.state.location.longitude,(s)=>{
        // if(!!!s){
            if(s>=150){
                if(!this.state.vibrate){
                    Alert.alert("你已经快要脱离打卡范围，请记得打卡！");
                    this.state.vibrate = true;
                    Vibration.vibrate([0, 500, 1000, 500],false);
                }
                
            }
        // }else{
            // Alert.alert("请拖动标记至公司地址！");
        // }
    });
    
  }

  _MarkerOnDragEnd(evt){
      this.state.location.latitude = evt.latitude;
      this.state.location.longitude = evt.longitude;
      Alert.alert("已经更新公司地点！");
      console.log(`${evt.latitude}, ${evt.longitude}`)
  }

  render() {
    return (
        <View style = {{flex:1}}>
        <View style = {{flex:0.1}}>
            <ComHeader leftItem = {()=>this._renderLeft()} titleItem= {()=>this._renderTitle()} rightItem={()=>this._renderRight()}/>
         </View>   
         <View style = {{flex:1}}>
            <MapView
                locationEnabled = {this.state.localState}
                distanceFilter={100}
                onLocation={({ nativeEvent }) =>this._onLocation(nativeEvent)}
                showsLocationButton
                showsBuildings
                showsCompass
                showsZoomControls
                zoomEnabled
                scrollEnabled
                rotateEnabled
                tiltEnabled
                mapType={this.state.mapType}
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
                    onDragEnd={({ nativeEvent }) =>this._MarkerOnDragEnd(nativeEvent)}
                    coordinate={this.props.initCoordinate?this.props.initCoordinate:this.state.initCoordinate}
                />
            </MapView>
            </View>
        </View>
    )
  }

  
  
  getRad(d){
      return d*PI/180.0;
  }
  
  /**
   * caculate the great circle distance
   * @param {Object} lat1
   * @param {Object} lng1
   * @param {Object} lat2
   * @param {Object} lng2
   */
  etGreatCircleDistance(lat1,lng1,lat2,lng2,callback){
      let radLat1 = this.getRad(lat1);
      let radLat2 = this.getRad(lat2);
      
      let a = radLat1 - radLat2;
      let b = this.getRad(lng1) - this.getRad(lng2);
      
      let s = 2*Math.asin(Math.sqrt(Math.pow(Math.sin(a/2),2) + Math.cos(radLat1)*Math.cos(radLat2)*Math.pow(Math.sin(b/2),2)));
      s = s*EARTH_RADIUS;
      s = Math.round(s*10000)/10000.0;
      callback(s);
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
