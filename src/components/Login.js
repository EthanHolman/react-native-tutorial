import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, Image, StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import colors from '../assets/theme/colors';
import Container from '../components/common/Container';
import CustomButton from '../components/common/CustomButton';
import Input from '../components/common/Input';
import {REGISTER} from '../constants/routeNames';
import Message from './common/Message';

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

const LoginComponent = ({onSubmit, error, onChange, loading}) => {
  const {navigate} = useNavigation();
  const [isSecureEntry, setIsSecureEntry] = React.useState(true);

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

        {error && !error.error && (
          <Message
            danger
            message={`Err: ${error.error}`}
            onDismiss={() => {}}
          />
        )}

        <View style={styles.form}>
          <Input
            label="Username"
            iconPosition="right"
            placeholder="Enter Username"
            onChangeText={value => onChange({name: 'userName', value})}
          />
          <Input
            label="Password"
            icon={
              <TouchableOpacity
                onPress={() => setIsSecureEntry(!isSecureEntry)}>
                {isSecureEntry && <Text>SHOW</Text>}
                {!isSecureEntry && <Text>HIDE</Text>}
              </TouchableOpacity>
            }
            iconPosition="right"
            placeholder="Enter Password"
            secureTextEntry={isSecureEntry}
            onChangeText={value => onChange({name: 'password', value})}
          />
          <CustomButton
            primary
            title="Submit"
            loading={loading}
            onPress={onSubmit}
            disabled={loading}
          />
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
