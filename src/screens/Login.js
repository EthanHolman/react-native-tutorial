import React, {useContext} from 'react';
import LoginComponent from '../components/Login';
import loginUser from '../context/actions/auth/loginUser';
import {GlobalContext} from '../context/GlobalContext';
import {useRoute} from '@react-navigation/native';

const Login = () => {
  const [form, setForm] = React.useState({});
  const [justSignedUp, setJustSignedUp] = React.useState(false);
  const {params} = useRoute();

  React.useEffect(() => {
    if (params?.data) {
      setForm({...form, userName: params.data.username});
      setJustSignedUp(true);
    }
  }, [params]);

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

  return (
    <LoginComponent
      {...{
        form,
        onSubmit,
        onChange,
        error,
        loading,
        justSignedUp,
      }}
    />
  );
};

export default Login;
