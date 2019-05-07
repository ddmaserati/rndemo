import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';//引入包
import {View,Text} from 'react-native'
import getRouter from './app/router';
import {Provider} from 'react-redux';
const App = () => {
return (
  <Router>
               <Provider>
                 
                {getRouter()}
            </Provider>

  </Router>

);
}

export default App;
// class App extends Component{
//   constructor(props)
//   {
//       super(props)
//   }

//   render() {
     
//       return (
//           <View>
//            <Text>Test</Text> 
//           </View>
//       )
//   }
// }

// export default App