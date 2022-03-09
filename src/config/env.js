// import {DEV_BACKEND_URL} from '@env';

const DEV_BACKEND_URL = 'https://truly-contacts.herokuapp.com/api'; // fix this to use env someday

const devEnvironmentVariables = {
  DEV_BACKEND_URL,
};

const prodEnvironmentVariables = {
  DEV_BACKEND_URL,
};

export default __DEV__ ? devEnvironmentVariables : prodEnvironmentVariables;
