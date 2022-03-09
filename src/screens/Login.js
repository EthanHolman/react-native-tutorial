import React from 'react';
import LoginComponent from '../components/Login';

const Login = () => {
  const [text, onChangeText] = React.useState('Useless Text');

  return <LoginComponent />;
};

export default Login;
