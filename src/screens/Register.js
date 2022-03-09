import React from 'react';
import {View, Text} from 'react-native';
import RegisterComponent from '../components/Register';

const Register = () => {
  const [form, setForm] = React.useState({});
  const [errors, setErrors] = React.useState({});

  const onChange = ({name, value}) => {
    setForm({...form, [form]: value});

    if (value) {
      if (name === 'password') {
        if (value.length < 6) {
          setErrors(prev => {
            return {...prev, [name]: 'Password minimum 6 characters'};
          });
        } else {
          setErrors(prev => {
            return {...prev, [name]: null};
          });
        }
      } else {
        setErrors(prev => {
          return {...prev, [name]: null};
        });
      }
    } else {
      setErrors(prev => {
        return {...prev, [name]: 'This Field Is Required'};
      });
    }
  };

  const onSubmit = () => {
    // validations

    if (!form.userName) {
      setErrors(prev => {
        return {...prev, userName: 'Please add a username'};
      });
    }
    if (!form.firstName) {
      setErrors(prev => {
        return {...prev, firstName: 'Please add a first name'};
      });
    }
    if (!form.lastName) {
      setErrors(prev => {
        return {...prev, lastName: 'Please add a last name'};
      });
    }
    if (!form.email) {
      setErrors(prev => {
        return {...prev, email: 'Please add a email'};
      });
    }
    if (!form.password) {
      setErrors(prev => {
        return {...prev, password: 'Please add a password'};
      });
    }

    console.log(form);
  };

  return <RegisterComponent {...{form, errors, onSubmit, onChange}} />;
};

export default Register;
