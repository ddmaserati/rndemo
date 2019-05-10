
import React, {Component} from 'react';
import {
    View, Image, StatusBar, Platform, Animated, Easing,Text,Button
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import styles, {screenHeight, screenWidth} from "../style"

// import loginActions from '../store/actions/login'
// import userActions from '../store/actions/user'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as Constant from "../style/constant"
// import SplashScreen from './widget/native/SplashNative'

import ToastLong from "../common/ToastProxy"
import ToastShow from '../common/ToastProxy';

// import Toast from 'react-native-root-toast'
/**
 * 欢迎页
 */
class WelcomePage extends Component {

   
  
  render() {     
      return (
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
           <Text>Welcome!</Text> 
           <Button
           title="go to login"
           onPress = {
                ()=> 
                {
                    ToastShow('sdfsfsdf')
                }
           }
           />


          
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