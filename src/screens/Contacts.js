import {useNavigation, useFocusEffect} from '@react-navigation/native';
import React from 'react';
import {Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from '../components/common/Icon';
import ContactsComponent from '../components/Contacts';
import {GlobalContext} from '../context/GlobalContext';
import getContacts from '../context/actions/contacts/getContacts';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Contacts = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const {setOptions, toggleDrawer} = useNavigation();
  const [sortBy, setSortBy] = React.useState(false);

  const {
    contactDispatch,
    contactState: {
      getContacts: {data, loading},
    },
  } = React.useContext(GlobalContext);

  React.useEffect(() => {
    getContacts()(contactDispatch);
  }, []);

  const getSettings = async () => {
    const sortPref = await AsyncStorage.getItem('sortBy');
    if (sortPref) {
      setSortBy(sortPref);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      getSettings();
    }, []),
  );

  React.useEffect(() => {
    setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => toggleDrawer()}>
          <Icon type="material" style={{padding: 10}} size={25} name="menu" />
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <ContactsComponent
      {...{modalVisible, setModalVisible, data, loading, sortBy}}
    />
  );
};

export default Contacts;
