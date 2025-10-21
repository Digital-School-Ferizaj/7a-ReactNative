import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./src/screens/HomeScreen";
import AboutScreen from "./src/screens/aboutScreen";
import ShopScreen from "./src/screens/shopScreen";
import ListScreen from './src/screens/listScreen';
import ProductList from './src/screens/productList';
import SimProductList from './src/screens/simProdList';
import FlexScreen from './src/screens/flexScreen';
import ApiScreen from './src/screens/apiScreen';
import ChallengeScreen from './src/screens/challengeScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerTitle: 'App' }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Shop" component={ShopScreen} />
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="ProductList" component={ProductList} />
        <Stack.Screen name="SimProductList" component={SimProductList} />
        <Stack.Screen name="FlexScreen" component={FlexScreen} />
        <Stack.Screen name="ApiScreen" component={ApiScreen} />
        <Stack.Screen name="ChallengeScreen" component={ChallengeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
