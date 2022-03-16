import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text} from 'react-native';
import {
  CONTACT_CREATE,
  CONTACT_DETAIL,
  CONTACT_LIST,
  LOGOUT,
  SETTINGS,
} from '../constants/routeNames';
import Contacts from '../screens/Contacts';
import ContactDetail from '../screens/ContactDetail';
import CreateContact from '../screens/CreateContact';
import Settings from '../screens/Settings';
import Logout from '../screens/Logout';

const HomeNavigator = () => {
  const HomeStack = createStackNavigator();

  return (
    <HomeStack.Navigator initialRouteName={CONTACT_LIST}>
      <HomeStack.Screen name={CONTACT_LIST} component={Contacts} />
      <HomeStack.Screen name={CONTACT_DETAIL} component={ContactDetail} />
      <HomeStack.Screen name={CONTACT_CREATE} component={CreateContact} />
      <HomeStack.Screen name={SETTINGS} component={Settings} />
      <HomeStack.Screen name={LOGOUT} component={Logout} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
