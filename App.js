import React from 'react';

import ResultScreen from './Screens/ResultScreen';
import MuushigScreen from './Screens/MuushigScreen';
import QuestionScreen from './Screens/QuestionScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='QuestionScreen'
        screenOptions={{ title: null, headerStyle: { elevation: 0 } }}
      >
        <Stack.Screen
          name='QuestionScreen'
          component={QuestionScreen}
          options={{ headerShown:false }} />
          <Stack.Screen
          name='MuushigScreen'
          component={MuushigScreen}
          options={{ headerShown:false }} />
          <Stack.Screen
          name='ResultScreen'
          component={ResultScreen}
          options={{ headerShown:false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
