import {useNavigation} from '@react-navigation/native';
import React, {useContext, useRef} from 'react';
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
  const sheetRef = useRef(null);
  const [form, setForm] = React.useState({});
  const {navigate} = useNavigation();

  const closeSheet = () => {
    if (sheetRef.current) sheetRef.current.close();
  };

  const openSheet = () => {
    if (sheetRef.current) sheetRef.current.open();
  };

  const onChangeText = ({name, value}) => {
    setForm({...form, [name]: value});
  };

  const toggleValueChange = () => {
    setForm({...form, isFavorite: !form.isFavorite});
  };

  const onFileSelected = images => {
    closeSheet();
    console.log(images);
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
        closeSheet,
        openSheet,
        sheetRef,
        onFileSelected,
      }}
    />
  );
};

export default CreateContact;
