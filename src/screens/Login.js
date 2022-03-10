import React, {useContext} from 'react';
import LoginComponent from '../components/Login';
import loginUser from '../context/actions/auth/loginUser';
import {GlobalContext} from '../context/GlobalContext';

const Login = () => {
  const [form, setForm] = React.useState({});

  const {
    authDispatch,
    authState: {error, loading},
  } = useContext(GlobalContext);

  const onSubmit = () => {
    if (form.userName && form.password) {
      loginUser(form)(authDispatch);
    }
  };

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});
  };

  return <LoginComponent {...{form, onSubmit, onChange, error, loading}} />;
};

export default Login;
