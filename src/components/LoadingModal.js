/**
 * Created by 杨超凡 on 2018/4/18.
 * 加载提示框
 */
import React,{ Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Modal,
    ActivityIndicator,
    Button,
    Alert
} from 'react-native';

export default class LoadingModal extends Component {

    constructor(props){
        super(props);
        this.state = {
            visible: this.props.visible,
            transparent: true,
            modalTitle: this.props.modalTitle?this.props.modalTitle:'正在提交，请稍候...',
        }
    }

    render(){
        this.state.visible=this.props.visible;
        return (
            <Modal
            visible={this.state.visible}
            transparent={this.state.transparent}
            onRequestClose={()=>{
                Alert.alert('请耐心等待...');
            }}
            onShow={()=>{}}>
            <View
                style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'rgba(0, 0, 0, 0.3)'}}>
                <View style={{height:200,width:275,backgroundColor:'white',justifyContent:'center',alignItems:'center',borderRadius:10}}>
                    <Text style={{marginBottom:20}}>{this.state.modalTitle}</Text>
                    <ActivityIndicator size="large"/>
                </View>
            </View>
            </Modal>
        )
    }
}