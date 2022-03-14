import {useNavigation} from '@react-navigation/native';
import React, {useContext} from 'react';
import CreateContactComponent from '../components/CreateContact';
import createContacts from '../context/actions/contacts/createContacts';
import {GlobalContext} from '../context/GlobalContext';
import {CONTACT_LIST} from '../constants/routeNames';

const CreateContact = () => {
  const {
    contactDispatch,
    contactState: {
      createContacts: {loading, error},
    },
  } = useContext(GlobalContext);
  const [form, setForm] = React.useState({});
  const {navigate} = useNavigation();

  const onChangeText = ({name, value}) => {
    setForm({...form, [name]: value});
  };

  const toggleValueChange = () => {
    setForm({...form, isFavorite: !form.isFavorite});
  };

  const onSubmit = () => {
    createContacts(form)(contactDispatch)(() => {
      navigate(CONTACT_LIST);
    });
  };

  return (
    <CreateContactComponent
      {...{
        onChangeText,
        form,
        onSubmit,
        setForm,
        loading,
        error,
        toggleValueChange,
      }}
    />
  );
};

export default CreateContact;
