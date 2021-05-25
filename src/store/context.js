import {createContext, useEffect, useState} from 'react';

import {firebase} from '../firebase/config';

export const FirebaseContext = createContext(null);
export const AuthContext = createContext(null);

function Context({children}) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  return (
    <AuthContext.Provider value={{user, setUser}}>
      {children}
    </AuthContext.Provider>
  );
}

export default Context;
