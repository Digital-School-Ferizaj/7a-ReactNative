import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "../screens/HomeScreen";
import AboutScreen from "../screens/aboutScreen";
import ShopScreen from "../screens/shopScreen";
import ListScreen from '../screens/listScreen';
import ProductList from '../screens/productList';
import SimProductList from '../screens/simProdList';
import FlexScreen from '../screens/flexScreen';
import ApiScreen from '../screens/apiScreen';
import ChallengeScreen from '../screens/challengeScreen';
import CountriesScreen from '../screens/countriesScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
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
        <Stack.Screen name="CountriesScreen" component={CountriesScreen} />
      </Stack.Navigator>
  );
}

const screenOptionStyle = {
  headerStyle: { backgroundColor: '#f4511e' },
  headerTintColor: '#fff',
  headerTitleStyle: { fontWeight: 'bold' },
};

export default StackNavigator;