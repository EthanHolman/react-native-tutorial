import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeNavigator from './HomeNavigator';
import {HOME_NAVIGATION} from '../constants/routeNames';
import SideMenu from './SideMenu';
import {GlobalContext} from '../context/GlobalContext';

const getDrawerContent = (navigation, authDispatch) => {
  return <SideMenu {...{navigation, authDispatch}} />;
};

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  const {authDispatch} = React.useContext(GlobalContext);

  return (
    <Drawer.Navigator
      drawerType="slide"
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={({navigation}) =>
        getDrawerContent(navigation, authDispatch)
      }>
      <Drawer.Screen name={HOME_NAVIGATION} component={HomeNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
