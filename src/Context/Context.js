import React, { createContext } from 'react';
import { app } from '../firebase/Firebase.confiq';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const contextProvider = createContext();
const auth = getAuth(app)

const Context = ({ children }) => {

    const googleLogin = provider => {
        return signInWithPopup(auth, provider);
    }

    const githubLogin = provider => {
        return signInWithPopup(auth, provider);
    }

    const authInfo = { googleLogin, githubLogin }

    return (
        <contextProvider.Provider value={authInfo}>
            {children}
        </contextProvider.Provider>
    );
};

export default Context;