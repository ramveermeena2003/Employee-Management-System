import React, {createContext, useEffect, useState } from 'react'
import { getLocalStorage } from '../Utils/LocalStorage';

export const AuthConext = createContext()

const AuthProvider = ({children}) => {

    const [userData, setUserData]  = useState(null);

    useEffect(() => {
      const {employees, admin} = getLocalStorage();
      setUserData({employees, admin})
    }, [])
    

  return (
    <div>
      <AuthConext.Provider value={userData}>
      {children}
      </AuthConext.Provider>
    </div>
  )
}

export default AuthProvider
