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
} from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../../actions/loginAction'
import LoadingModal from '../../components/LoadingModal'
import EditView from '../../components/EditView'
import LoginButton from '../../components/LoginButton'

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            modalVisible: false,
            modalTitle: '正在加载，请稍候...'
        };
        this.login = this.login.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
    }

    login(){
        if(this.state.username && this.state.password){
            this.props.actions.login({'username': this.state.username,'password': this.state.password});
        }else{
            Alert.alert('用户密码不能为空！');
        }
    }

    onChangeUsername(text){
        this.setState({
            username:text,
        });
    }

    onChangePassword(text){
        this.setState({
            password: text,
        });
    }

   shouldComponentUpdate(nextProps,nextState){
        const {isLoggedIn,navigation}=nextProps;
        if(isLoggedIn){
            navigation.navigate('Tab');
        }
        return true;
    }

    render(){
        return (
            <View style={{flex:1}}>
                <StatusBar barStyle={'light-content'} />
                <ImageBackground source={require('../../../res/images/bgImage.jpg')} style={LoginStyles.backgroundImage} >
                    <View style={LoginStyles.loginview}>
                        <StatusBar hidden={true} barStyle="light-content"  />
                        <View style={{marginTop:0}}>
                            <EditView  name='输入用户名' onChangeText={(text)=>this.onChangeUsername(text)}/>
                            <EditView name='输入密码' secureTextEntry={true} onChangeText={(text) => this.onChangePassword(text)}/>
                            <LoginButton name='登录' onPressCallback={()=>this.login()}/>
                            <Text style={{color:"#4A90E2",textAlign:'center',marginTop:10}} >忘记密码？</Text>
                        </View>
                    </View>
                    <LoadingModal modalTitle = {this.state.modalTitle} visible={this.state.modalVisible}/>
                </ImageBackground>
            </View>
        )
    }

}

const LoginStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    loginview: {
        flex: 1,
        justifyContent:'center',
        padding: 30,
        width:300
        // backgroundColor: '#ffffff',
    },
    backgroundImage: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width:null,
        height:null,
        //不加这句，就是按照屏幕高度自适应
        //加上这几，就是按照屏幕自适应
        // resizeMode:Image.resizeMode.contain,
        //祛除内部元素的白色背景
        backgroundColor:'rgba(0,0,0,0)'
    }
});

export default connect(state=>({
        isLoggedIn: state.loginReducer.isLoggedIn,
        status: state.loginReducer.status,
}),(dispatch)=>({
    actions: bindActionCreators(actionCreators, dispatch)
}))(Login);