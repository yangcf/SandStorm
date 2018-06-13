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
  Alert,
  TouchableOpacity,
  Image
} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../actions/accountAction'
import ComHeader from '../components/ComHeader'

class Account extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    _renderLeft(){
        return (
            <TouchableOpacity onPress={() => { this.props.navigation.goBack()}} >
                <Image source={require('../../res/images/return.png')} />
            </TouchableOpacity>
        );
      }
      _renderTitle(){
          return (
              <View>
                <Text style={{color:'white'}}>理财小账本</Text>
              </View>
          )
      }
    _renderRight(){
      }

  render() {
    return (
        <View style = {{flex:1}}>
            <View style = {{flex:0.1}}>
                <ComHeader leftItem = {()=>this._renderLeft()} titleItem= {()=>this._renderTitle()} rightItem={()=>this._renderRight()}/>
            </View>
            <View style = {{flex:1}}>

            </View>
        </View>
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

export default connect(state=>({
}),(dispatch)=>({
actions: bindActionCreators(actionCreators, dispatch)
}))(Account);