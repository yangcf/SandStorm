/**
 * Created by 杨超凡 on 2018/4/18.
 * 输入框
 */
import React, { Component } from 'react';
import {
    ToolbarAndroid,
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';

export default class EditView extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }
    render() {
        return (
            <View style={LoginStyles.TextInputView}>
                <TextInput style={LoginStyles.TextInput}
                           placeholder={this.props.name}
                           defaultValue={null}
                           secureTextEntry={this.props.secureTextEntry}
                           onChangeText={
                               (text) => {
                                   this.setState({text});
                                   this.props.onChangeText(text);
                               }
                           }
                />
            </View>
        );
    }
}


const LoginStyles = StyleSheet.create({
    TextInputView: {
        marginTop: 10,
        height:50,
        backgroundColor: '#ffffff',
        borderRadius:5,
        borderWidth:0.3,
        borderColor:'#000000',
        flexDirection: 'column',
        justifyContent: 'center',
    },

    TextInput: {
        backgroundColor: '#ffffff',
        height:45,
        margin:18,
    },
});
