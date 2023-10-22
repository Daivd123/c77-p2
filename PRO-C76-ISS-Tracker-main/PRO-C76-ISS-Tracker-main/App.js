import 'react-native-gesture-handler';
import * as React from 'react';
import {NavifationContainer} from '@react-navigation/native';
import{createStackNavigator} from '@react-navigation/stack';

import HomeScreen from "./screens/Home";
import IssLocationScreen from "./screens/IssLocation";
import MeteorScreen from "./screens/Meteors";

const Stack = createStackNavigator();

function App () {
  return (
    <NavigationContaner>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="IssLocation" component={IssLocationScreen}/>
        <Stack.Screen name="Meteorss" component={MeteorScreen}/>
      </Stack.Navigator>
    </NavigationContaner>
  );
}

export default App;