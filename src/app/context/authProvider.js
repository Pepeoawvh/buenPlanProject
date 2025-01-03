'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../firebase/config'; // Asegúrate de que la ruta sea correcta

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      console.log("Auth state changed:", user);
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const logout = () => {
    return auth.signOut();
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};