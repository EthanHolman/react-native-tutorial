import {useNavigation} from '@react-navigation/native';
import React, {useContext, useRef, useState} from 'react';
import CreateContactComponent from '../components/CreateContact';
import createContacts from '../context/actions/contacts/createContacts';
import {GlobalContext} from '../context/GlobalContext';
import {CONTACT_LIST} from '../constants/routeNames';
import uploadImage from '../helpers/uploadImage';

const CreateContact = () => {
  const {
    contactDispatch,
    contactState: {
      createContacts: {loading, error},
    },
  } = useContext(GlobalContext);
  const sheetRef = useRef(null);
  const [form, setForm] = React.useState({});
  const [uploading, setIsUploading] = React.useState(false);
  const {navigate} = useNavigation();
  const [localFile, setLocalFile] = useState(null);

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
    setLocalFile(images);
    console.log(images);
  };

  const onSubmit = () => {
    if (localFile?.size) {
      setIsUploading(true);
      uploadImage(localFile)(url => {
        setIsUploading(false);
        createContacts({...form, contactPicture: url})(contactDispatch)(() => {
          navigate(CONTACT_LIST);
        });
      })(error => {
        setIsUploading(false);
        console.error(error);
      });
    } else {
      createContacts(form)(contactDispatch)(() => {
        navigate(CONTACT_LIST);
      });
    }
  };

  return (
    <CreateContactComponent
      {...{
        onChangeText,
        form,
        onSubmit,
        setForm,
        loading: loading || uploading,
        error,
        toggleValueChange,
        closeSheet,
        openSheet,
        sheetRef,
        onFileSelected,
        localFile,
      }}
    />
  );
};

export default CreateContact;
