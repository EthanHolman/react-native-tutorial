import React from 'react';
import Container from '../components/common/Container';
import {
  SafeAreaView,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import {SETTINGS} from '../constants/routeNames';
import {Alert} from 'react-native';
import logoutUser from '../context/actions/auth/logoutUser';
import Icon from '../components/common/Icon';

const styles = StyleSheet.create({
  logoImage: {
    height: 150,
    width: 150,
    alignSelf: 'center',
    marginTop: 50,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 17,
    paddingVertical: 7,
    paddingLeft: 20,
  },
});

const SideMenu = ({navigation, authDispatch}) => {
  const handleLogout = () => {
    navigation.toggleDrawer();
    Alert.alert('Logout 🚪', 'Are you sure you want to logout?', [
      {text: 'Cancel', onPress: () => {}},
      {
        text: 'Letsdoit',
        onPress: () => {
          logoutUser()(authDispatch);
        },
      },
    ]);
  };

  const menuItems = [
    {
      icon: <Icon type="fontisto" name="player-settings" size={17} />,
      name: 'Settings',
      onPress: () => navigation.navigate(SETTINGS),
    },
    {
      icon: <Icon type="material" name="logout" size={17} />,
      name: 'Logout',
      onPress: handleLogout,
    },
  ];

  return (
    <SafeAreaView>
      <Container>
        <Image
          source={require('../assets/images/logo.png')}
          height={70}
          width={70}
          style={styles.logoImage}
        />
        <View style={{paddingHorizontal: 70}}>
          {menuItems.map(({name, icon, onPress}) => (
            <TouchableOpacity key={name} style={styles.item} onPress={onPress}>
              {icon}
              <Text style={styles.itemText}>{name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Container>
    </SafeAreaView>
  );
};

export default SideMenu;
