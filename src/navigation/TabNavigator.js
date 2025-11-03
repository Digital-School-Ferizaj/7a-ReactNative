import React from 'react';
import {HomeStack, AboutStack} from './src/navigation/StackNavigator';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator >
        <Tab.Screen 
          name="Home" 
          component={HomeStack}
        />
        <Tab.Screen 
          name="About" 
          component={AboutStack}
        />
    </Tab.Navigator>
    );
}

export default TabNavigator;