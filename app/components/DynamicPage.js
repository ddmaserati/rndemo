

import React, {Component} from 'react';
import {View,Text,Button} from 'react-native'
import { Actions } from 'react-native-router-flux';

class DynamicPage extends Component{
    constructor(props)
    {
        super(props)
    }

    render() {
       
        return (
            <View>
             <Text>DynamicPageDynamicPageDynamicPage</Text> 
             <Button
             title='点击'
     onPress={() =>
    {
        Actions.test()
    }}
             ></Button>
            </View>
        )
    }
}

export default DynamicPage