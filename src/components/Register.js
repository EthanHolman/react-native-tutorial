import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, Image, StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import colors from '../assets/theme/colors';
import Container from './common/Container';
import CustomButton from './common/CustomButton';
import Input from './common/Input';
import {REGISTER} from '../constants/routeNames';

const styles = StyleSheet.create({
  logoImage: {
    height: 150,
    width: 150,
    alignSelf: 'center',
    marginTop: 50,
  },
  title: {
    fontSize: 21,
    textAlign: 'center',
    paddingTop: 20,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 17,
    textAlign: 'center',
    paddingVertical: 20,
    fontWeight: '500',
  },
  form: {
    paddingTop: 20,
  },
  createSection: {
    flexDirection: 'row',
  },
  linkBtn: {
    paddingLeft: 17,
    color: colors.primary,
    fontSize: 16,
  },
  infoText: {
    fontSize: 17,
  },
});

const RegisterComponent = ({
  onSubmit,
  onChange,
  form,
  errors,
  error,
  loading,
}) => {
  const {navigate} = useNavigation();

  return (
    <Container>
      <Image
        source={require('../assets/images/logo.png')}
        height={70}
        width={70}
        style={styles.logoImage}
      />
      <View>
        <Text style={styles.title}>Welcome to RNContacts</Text>
        <Text style={styles.subTitle}>Please create a free account:</Text>
        <View style={styles.form}>
          {error && <Text>{error?.toString()}</Text>}
          <Input
            label="Username"
            iconPosition="right"
            placeholder="Enter Username"
            onChangeText={value => onChange({name: 'userName', value})}
            error={errors.userName || error?.username?.[0]}
          />
          <Input
            label="First Name"
            iconPosition="right"
            placeholder="Enter First Name"
            onChangeText={value => onChange({name: 'firstName', value})}
            error={errors.firstName || error?.first_name?.[0]}
          />
          <Input
            label="Last Name"
            iconPosition="right"
            placeholder="Enter Last Name"
            onChangeText={value => onChange({name: 'lastName', value})}
            error={errors.lastName || error?.last_name?.[0]}
          />
          <Input
            label="Email"
            iconPosition="right"
            placeholder="Enter Email"
            onChangeText={value => onChange({name: 'email', value})}
            error={errors.email || error?.email?.[0]}
          />
          <Input
            label="Password"
            icon={<Text>HIDE</Text>}
            iconPosition="right"
            placeholder="Enter Password"
            secureTextEntry
            onChangeText={value => onChange({name: 'password', value})}
            error={errors.password || error?.password?.[0]}
          />
          <CustomButton
            onPress={onSubmit}
            primary
            title="Submit"
            loading={loading}
            disabled={loading}
          />
          <View style={styles.createSection}>
            <Text style={styles.infoText}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigate(REGISTER)}>
              <Text style={styles.linkBtn}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default RegisterComponent;
