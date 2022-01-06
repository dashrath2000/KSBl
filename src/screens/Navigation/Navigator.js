import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from '../MainScreen';
import SearchLabel from '../searchLabel';

const Stack = createNativeStackNavigator();

export default function navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
       
        <Stack.Screen
          name="SearchLabel"
          component={SearchLabel}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
