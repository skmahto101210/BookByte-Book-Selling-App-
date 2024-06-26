import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (fullName, username, email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(
      auth,
      fullName,
      username,
      email,
      password
    );
  };

  const loginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout = () => {
    setLoading(false);
    return signOut(auth);
  };
  const passwordReset = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    const unsusbscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log(currentUser);
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      return unsusbscribe();
    };
  });

  return (
    <AuthContext.Provider
      value={{
        user,
        createUser,
        loginWithGoogle,
        loading,
        login,
        logout,
        passwordReset,
      }}>
      {children}
    </AuthContext.Provider>
  );
}
