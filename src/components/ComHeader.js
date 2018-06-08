/**
 * Created by 杨超凡 on 2018/4/18.
 *
 * 自定义公共头部组件
 */
import React,{ Component } from 'react'
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import Dimensions from 'Dimensions';
import PropTypes from 'prop-types';

const {width, height, scale} = Dimensions.get('window');
export default class commonHead extends Component{
    static propTypes = {
        leftItem: PropTypes.func,
        titleItem: PropTypes.func,
        rightItem: PropTypes.func
    };

    renderLeftItem(){
        if (this.props.leftItem === undefined) return;
        return this.props.leftItem();
    }

    renderRightItem(){
        if (this.props.rightItem === undefined) return;
        return this.props.rightItem();
    }

    renderTitleItem(){
        if (this.props.titleItem === undefined) return;
        return this.props.titleItem();
    }

    render(){
        let renderLeftItem = this.renderLeftItem();
        let renderRightItem = this.renderRightItem();
        let renderTitleItem = this.renderTitleItem();
        return (
                <View style={[styles.navBarStyle]}>
                    <View>
                        {renderLeftItem}
                    </View>
                    <View>
                        {renderTitleItem}
                    </View>
                    <View>
                        {renderRightItem}
                    </View>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    navBarStyle: {
        flex:1,
        width:width,
        height:30,
        backgroundColor:'#108EE9',//背景色，默认白色
        flexDirection:'row',//横向排
        justifyContent:'space-between',//主轴对齐方式
        alignItems: 'center',//次轴对齐方式（上下居中）
        borderBottomWidth: 0.5,//是否有下边框
        borderColor: '#ccc',
        padding:10
    }
});