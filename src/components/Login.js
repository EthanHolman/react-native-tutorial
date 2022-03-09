import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, Image, StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import colors from '../assets/theme/colors';
import Container from '../components/common/Container';
import CustomButton from '../components/common/CustomButton';
import Input from '../components/common/Input';
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

const LoginComponent = () => {
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
        <Text style={styles.subTitle}>Please Login Here:</Text>
        <View style={styles.form}>
          <Input
            label="Username"
            iconPosition="right"
            placeholder="Enter Username"
          />
          <Input
            label="Password"
            icon={<Text>HIDE</Text>}
            iconPosition="right"
            placeholder="Enter Password"
            secureTextEntry
          />
          <CustomButton primary title="Submit" loading={false} />
          <View style={styles.createSection}>
            <Text style={styles.infoText}>Need an account?</Text>
            <TouchableOpacity onPress={() => navigate(REGISTER)}>
              <Text style={styles.linkBtn}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default LoginComponent;
