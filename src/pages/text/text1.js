import React, { Component } from 'react';
import {
    Text,
    View,
} from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../../actions/loginAction'

class Text1Page extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }
    render(){
        return (
            <View style={{flex:1}}>
                    <View>
                        <View style={{marginTop:0}}>
                            <Text>第二个测试页面</Text>
                        </View>
                    </View>
            </View>
        )
    }

}

export default connect(state=>({
}),(dispatch)=>({
    actions: bindActionCreators(actionCreators, dispatch)
}))(Text1Page);