
import React, {Component} from 'react';
import {
    View, Image, StatusBar, Platform, Animated, Easing,Text
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import styles, {screenHeight, screenWidth} from "../style"

// import loginActions from '../store/actions/login'
// import userActions from '../store/actions/user'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as Constant from "../style/constant"
// import SplashScreen from './widget/native/SplashNative'


/**
 * 欢迎页
 */
class WelcomePage extends Component {

   
  
  render() {     
      return (
          <View>
           <Text>Test</Text> 
          </View>
      )
  }
}


// export default connect(state => ({
//     state
// }), dispatch => ({
//     actions: bindActionCreators(loginActions, dispatch),
// }))(WelcomePage)

export default WelcomePage