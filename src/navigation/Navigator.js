import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../views/profile';
import HomeScreen from '../views/home';
import HistoryScreen from '../views/history';
import ServiceScreen from '../views/service';
import ServiceCategoriesScreen from '../views/service_categories';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { widthPercentageToDP } from '../utils/helpers/sizes';
import { SimpleHeader } from '../components';
import { ORANGE, WHITE } from '../utils/constants/colors';

const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor={WHITE}
    // inactiveColor={WHITE}
    barStyle={{ backgroundColor: ORANGE }}
    labelStyle={{ fontSize: widthPercentageToDP('6') }}>
    <Tab.Screen
      name="Home"
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <Icon color={color} name="home" size={widthPercentageToDP('6')} />
        ),
      }}>
      {() => (
        <HomeStack.Navigator screenOptions={{ animationEnabled: false }}>
          <HomeStack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <HomeStack.Screen
            name="Service"
            component={ServiceScreen}
            options={{
              header: ({ scene }) => (
                <SimpleHeader title={scene.route.params?.title} />
              ),
            }}
          />
          <HomeStack.Screen
            name="ServiceCategories"
            component={ServiceCategoriesScreen}
            options={{
              header: ({ scene }) => (
                <SimpleHeader title={scene.route.params?.title} />
              ),
            }}
          />
        </HomeStack.Navigator>
      )}
    </Tab.Screen>
    <Tab.Screen
      name="History"
      component={HistoryScreen}
      options={{
        tabBarLabel: 'History',
        tabBarIcon: ({ color }) => (
          <Icon color={color} name="history" size={widthPercentageToDP('6')} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color }) => (
          <Icon color={color} name="account" size={widthPercentageToDP('6')} />
        ),
      }}
    />
  </Tab.Navigator>
);

const RootStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="TabNavigator"
      screenOptions={{ gestureEnabled: false, headerShown: false }}>
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default RootStack;
