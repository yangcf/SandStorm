import { AppRegistry } from 'react-native'
import Root from './src/Root'
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

AppRegistry.registerComponent('rn_redux_frame', () => Root);
