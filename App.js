import React from 'react';
import { Text, View,Button } from 'react-native';
import { createBottomTabNavigator, createAppContainer ,createStackNavigator} from 'react-navigation';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
   <Button 
    title="Go to Details"
   onPress={() =>
             this.props.navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'anything you want here',
            })}
            ></Button>
    </View>
    );
  }
}

class DetailsScreen extends React.Component {
  //  detail 界面标题栏状态
  static navigationOptions = {
    title: 'Detail',
   
  };
  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherParam = navigation.getParam('otherParam', 'some default value');

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Details!</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}



const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen,
});


HomeStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};


const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

export default createAppContainer(createBottomTabNavigator(
  {
    Home: HomeStack,
    Settings: SettingsStack,
  },
  
 
));