import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Switch,
  TouchableOpacity,
} from 'react-native';
import colors from '../assets/theme/colors';
import Container from './common/Container';
import Input from './common/Input';
import CustomButton from './common/CustomButton';
import CountryPicker from 'react-native-country-picker-modal';
import {DEFAULT_IMAGE_URI} from '../constants/general';
import PicturePicker from './common/PicturePicker';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  imageView: {
    width: 150,
    height: 150,
    borderRadius: 100,
    alignSelf: 'center',
  },
  chooseText: {
    color: colors.primary,
    textAlign: 'center',
  },
});

const CreateContactComponent = ({
  onChangeText,
  form,
  onSubmit,
  setForm,
  error,
  loading,
  toggleValueChange,
  sheetRef,
  openSheet,
  closeSheet,
  onFileSelected,
  localFile,
}) => {
  return (
    <View style={styles.container}>
      <Container>
        <Image
          source={{uri: localFile?.path || DEFAULT_IMAGE_URI}}
          style={styles.imageView}
        />
        <TouchableOpacity onPress={openSheet}>
          <Text style={styles.chooseText}>Choose image</Text>
        </TouchableOpacity>
        <Input
          label="First Name"
          placeholder="Enter First Name"
          onChangeText={value => {
            onChangeText({name: 'firstName', value});
          }}
          error={error?.first_name?.[0]}
        />
        <Input
          label="Last Name"
          placeholder="Enter Last Name"
          onChangeText={value => {
            onChangeText({name: 'lastName', value});
          }}
          error={error?.last_name?.[0]}
        />
        <Input
          iconPosition="left"
          icon={
            <CountryPicker
              withFilter
              withFlag
              withCountryNameButton={false}
              withCallingCode
              withCallingCodeButton
              withEmoji
              countryCode={form.countryCode || undefined}
              onSelect={v => {
                const phoneCode = v.callingCode[0];
                const cCode = v.cca2;
                setForm({...form, countryCode: cCode, phoneCode});
              }}
            />
          }
          onChangeText={value => {
            onChangeText({name: 'phoneNumber', value});
          }}
          style={{paddingLeft: 10}}
          label="Phone Number"
          placeholder="Enter Phone #"
          error={error?.phone_number?.[0]}
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 10,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 17}}>Add to favorites</Text>
          <Switch
            trackColor={{false: colors.grey, true: colors.primary}}
            thumbColor={colors.white}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleValueChange}
            value={form.isFavorite}
          />
        </View>

        <CustomButton
          loading={loading}
          disabled={loading}
          primary
          title="Submit"
          onPress={onSubmit}
        />
      </Container>
      <PicturePicker ref={sheetRef} onFileSelected={onFileSelected} />
    </View>
  );
};

export default CreateContactComponent;
