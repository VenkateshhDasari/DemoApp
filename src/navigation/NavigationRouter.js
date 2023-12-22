import React from 'react';
import {
  HomeIcon,
  FavouriteIcon,
  CartIcon,
  ProfileIcon,
} from '../Components/Icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../Components/HomeScreen';
import Favourite from '../Components/Favourite';
import Cart from '../Components/Cart';
import Profile from '../Components/Profile';
import DetailedScreen from '../Components/DetailedScreen';
import CheckoutScreen from '../Components/CheckoutScreen';

// Create a native stack navigator
const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        activeTintColor: 'black',
        inactiveTintColor: 'white',
        style: {
          borderTopWidth: 0,
          shadowOffset: {width: 8, height: 8},
          shadowColor: 'black',
          shadowOpacity: 0.5,
          elevation: 5,
        },
        tabBarItemStyle: {
          backgroundColor:
            route.name === 'HomeScreen' ||
            route.name === 'Favorite' ||
            route.name === 'Cart' ||
            route.name === 'Profile'
              ? '#fff'
              : '#000',
        },
      })}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarIcon: ({color}) => <HomeIcon color={color} />,
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Favourite}
        options={{
          tabBarLabel: 'Favourites',
          headerShown: false,
          tabBarIcon: ({color}) => <FavouriteIcon color={color} />,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: 'Cart',
          headerShown: false,
          tabBarIcon: ({color}) => <CartIcon color={color} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          headerShown: false,
          tabBarIcon: ({color}) => <ProfileIcon color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

const UserStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="TabNavigation" component={TabNavigation} />
    </Stack.Navigator>
  );
};

const NavigationRouter = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="UserStack"
        component={UserStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailedScreen"
        component={DetailedScreen}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="CheckoutScreen"
        component={CheckoutScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default NavigationRouter;
