import React from 'react';
import {View, Text, TextInput} from 'react-native';
import Container from '../../components/common/Container';
import Input from '../../components/common/Input';

const Login = () => {
  const [text, onChangeText] = React.useState('Useless Text');

  return (
    <Container>
      <Text>Hi from login</Text>
      <Input
        label="Username"
        onChangeText={onChangeText}
        value={text}
        iconPosition="right"
      />
      <Input
        label="Password"
        onChangeText={onChangeText}
        value={text}
        icon={<Text>HIDE</Text>}
        iconPosition="right"
      />
    </Container>
  );
};

export default Login;
