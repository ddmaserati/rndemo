
import React, {Component} from 'react';
import {View,Text,Button} from 'react-native'

class Test extends Component{

    static navigationOptions = ({ navigation }) => {

        header:null   //取消header
        
        }

    constructor(props)
    {
        super(props)
    }

    render() {
       
        return (
            <View>
             <Text>Test</Text> 
            </View>
        )
    }
}

export default Test