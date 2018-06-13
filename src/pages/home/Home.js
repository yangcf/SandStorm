import React, { Component } from 'react';
import {
    StyleSheet,
    TextInput,
    Text,
    View,
    TouchableHighlight,
    ActivityIndicator,
    ImageBackground,
    StatusBar,
    Alert,
    Button
} from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../../actions/amapAction'

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }

    render(){
        return (
            <View style={HomeStyles.contain}>
                <Button title={'打卡提醒'} onPress={()=>{
                    this.props.navigation.navigate('Amap');
                }}/>
                <Button title={'小账本'} onPress={()=>{
                    this.props.navigation.navigate('Account');
                }}/>
            </View>
        )
    }
}

const HomeStyles = StyleSheet.create({
    contain:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
    }
});
export default connect()(Home);