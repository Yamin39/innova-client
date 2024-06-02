import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loader, setLoader] = useState(false);

  // register with email, pass
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update User Name Img
  const updateUserNameImg = (user, name, imgUrl) => {
    return updateProfile(user, {
      displayName: name,
      photoURL: imgUrl,
    });
  };

  // login with email and password
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // google login
  const googleProvider = new GoogleAuthProvider();
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // log out
  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("currently logged in user: ", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => unSubscribe();
  }, [loader]);

  const authInfo = {
    user,
    loading,
    loader,
    setLoader,
    createUser,
    setLoading,
    updateUserNameImg,
    logOut,
    logIn,
    googleLogin,
  };
  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
