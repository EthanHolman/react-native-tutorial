import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from '../components/common/Icon';
import ContactsComponent from '../components/Contacts';
import {GlobalContext} from '../context/GlobalContext';
import getContacts from '../context/actions/contacts/getContacts';

const Contacts = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  // const [] = React.useState(false);
  const {setOptions, toggleDrawer} = useNavigation();

  const {
    contactDispatch,
    contactState: {
      getContacts: {data, loading},
    },
  } = React.useContext(GlobalContext);

  React.useEffect(() => {
    getContacts()(contactDispatch);
  }, []);

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
    <ContactsComponent {...{modalVisible, setModalVisible, data, loading}} />
  );
};

export default Contacts;
