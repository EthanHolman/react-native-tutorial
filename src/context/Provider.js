import React, {createContext, useReducer} from 'react';
import auth from './reducers/auth';
import authInitialState from './initialStates/authInitialState';
import contacts from './reducers/contacts';
import contactInitialState from './initialStates/contactInitialState';

export const GlobalContext = createContext({});

const GlobalProvider = ({children}) => {
  const [authState, authDispatch] = useReducer(auth, authInitialState);
  const [contactState, contactDispatch] = useReducer(
    contacts,
    contactInitialState,
  );

  return (
    <GlobalContext.Provider
      value={{authState, contactState, authDispatch, contactDispatch}}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
